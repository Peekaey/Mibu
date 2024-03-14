
export const client_id = '';
export const client_secret = ''
export const grant_type = 'code';
export const authorisation_endpoint = 'https://anilist.co/api/v2/oauth/authorize';

// Redirect URL in dev will be in the format of
// exp://<IP:PORT>/--/redirect
// Use AuthSession.makeRedirectUri to confirm IP/ports