export const FETCH_REGISTRATIONS = 'FETCH_REGISTRATIONS';
export const REGISTRATIONS_DATA = 'REGISTRATIONS_DATA';
export const REGISTRATIONS_ERROR = 'REGISTRATIONS_ERROR';

export const registrationsUser = (body) => ({
  type: FETCH_REGISTRATIONS,
  payload: body
});
