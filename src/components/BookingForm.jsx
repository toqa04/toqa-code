import { useState } from "react";
import FormField from "./FormField";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { isNonEmpty, isValidPhone } from "../lib/validation";
import { BOOKING_ENDPOINT } from "../lib/formEndpoints";
import { bookingSubjects } from "../data/subjects";

const initial = { name: "", phone: "", subject: "", notes: "" };

export default function BookingForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const { status, errorMessage, submit, reset } = useFormSubmit(BOOKING_ENDPOINT);

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate() {
    const next = {};
    if (!isNonEmpty(values.name)) next.name = "Please enter your name.";
    if (!isNonEmpty(values.phone)) next.phone = "A phone number is required so I can reach you.";
    else if (!isValidPhone(values.phone)) next.phone = "Please enter a valid phone number.";
    if (!isNonEmpty(values.subject)) next.subject = "Please choose a subject.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    submit({
      form_type: "Private tutoring request",
      name: values.name,
      phone: values.phone,
      subject: values.subject,
      notes: values.notes || "—",
    });
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h3>Thank you!</h3>
        <p>Your request has been received. I'll contact you soon.</p>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            setValues(initial);
            reset();
          }}
        >
          Book another session
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      action={BOOKING_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      <FormField
        id="bk-name"
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
        id="bk-phone"
        name="phone"
        label="Phone number"
        required
        type="tel"
        value={values.phone}
        onChange={update("phone")}
        placeholder="Enter your phone number"
        error={errors.phone}
        autoComplete="tel"
      />
      <FormField
        id="bk-subject"
        name="subject"
        label="Subject"
        as="select"
        required
        value={values.subject}
        onChange={update("subject")}
        error={errors.subject}
      >
        <option value="" disabled>
          Choose a subject
        </option>
        {bookingSubjects.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </FormField>
      <FormField
        id="bk-notes"
        name="notes"
        label="Notes"
        optional
        as="textarea"
        rows={4}
        value={values.notes}
        onChange={update("notes")}
        placeholder="Tell me what you need help with, preferred topics, or any additional details..."
      />

      {status === "error" && (
        <p className="form-error-banner" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Submit Request"}
      </button>
    </form>
  );
}
