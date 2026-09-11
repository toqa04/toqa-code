// This public Formspree endpoint is safe to use in client-side code.
// The form_type field distinguishes booking requests from feedback notes.
const FORM_ENDPOINT = "https://formspree.io/f/xqpkjjkr";

export const FEEDBACK_ENDPOINT = FORM_ENDPOINT;
export const BOOKING_ENDPOINT = FORM_ENDPOINT;

export const isFormConfigured = (endpoint) => Boolean(endpoint);
