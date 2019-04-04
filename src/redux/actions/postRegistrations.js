export const POST_REGISTRATIONS = 'POST_REGISTRATIONS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_ERROR = 'FETCH_ERROR';

export const postRegistrations = (body) => ({
  type: POST_REGISTRATIONS,
  payload: body
});
