
export const client_id = '17603';
export const client_secret = 'hQ3vRjvXLwdGzK7O6DkQFbCgoxI7zqiV2srkE2D8'
export const grant_type = 'code';
export const authorisation_endpoint = 'https://anilist.co/api/v2/oauth/authorize';

// Redirect URL in dev will be in the format of
// exp://<IP:PORT>/--/redirect
// Use AuthSession.makeRedirectUri to confirm IP/ports