export default function FormField({
  id,
  label,
  optional = false,
  error,
  as = "input",
  children,
  ...inputProps
}) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {optional && <span className="form-field-optional"> (optional)</span>}
      </label>

      {as === "textarea" && (
        <textarea id={id} aria-describedby={describedBy} aria-invalid={Boolean(error)} {...inputProps} />
      )}

      {as === "select" && (
        <select id={id} aria-describedby={describedBy} aria-invalid={Boolean(error)} {...inputProps}>
          {children}
        </select>
      )}

      {as === "input" && (
        <input id={id} aria-describedby={describedBy} aria-invalid={Boolean(error)} {...inputProps} />
      )}

      {error && (
        <p className="form-field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
