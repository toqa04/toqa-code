import { useState } from "react";
import FormField from "./FormField";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { isNonEmpty, isValidPhone } from "../lib/validation";
import { FEEDBACK_ENDPOINT } from "../lib/formEndpoints";

const initial = { name: "", phone: "", message: "" };

export default function FeedbackForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const { status, errorMessage, submit, reset } = useFormSubmit(FEEDBACK_ENDPOINT);

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate() {
    const next = {};
    if (!isNonEmpty(values.name)) next.name = "Please enter your name.";
    if (values.phone && !isValidPhone(values.phone)) next.phone = "Please enter a valid phone number.";
    if (!isNonEmpty(values.message)) next.message = "Please add a note so I know what you'd like to share.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    submit({
      form_type: "Feedback",
      name: values.name,
      phone: values.phone || "—",
      message: values.message,
    });
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h3>Thank you!</h3>
        <p>Your note has been received. I appreciate you taking the time to share it.</p>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            setValues(initial);
            reset();
          }}
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      action={FEEDBACK_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      <FormField
        id="fb-name"
        name="name"
        label="Full name"
        required
        value={values.name}
        onChange={update("name")}
        placeholder="Enter your full name"
        error={errors.name}
        autoComplete="name"
      />
      <FormField
        id="fb-phone"
        name="phone"
        label="Phone number"
        optional
        type="tel"
        value={values.phone}
        onChange={update("phone")}
        placeholder="Enter your phone number"
        error={errors.phone}
        autoComplete="tel"
      />
      <FormField
        id="fb-message"
        name="message"
        label="Your note"
        as="textarea"
        rows={4}
        value={values.message}
        onChange={update("message")}
        placeholder="Share feedback, a question, or anything else on your mind..."
        error={errors.message}
      />

      {status === "error" && (
        <p className="form-error-banner" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Your Note"}
      </button>
    </form>
  );
}
