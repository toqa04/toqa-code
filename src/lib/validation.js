// Accepts optional leading +, digits, spaces, dashes, parentheses; 7-15 digits total.
const PHONE_PATTERN = /^\+?[\d\s\-()]{7,20}$/;

export function isValidPhone(value) {
  if (!value) return false;
  const digitCount = value.replace(/\D/g, "").length;
  return PHONE_PATTERN.test(value) && digitCount >= 7 && digitCount <= 15;
}

export function isNonEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}
