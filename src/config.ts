export const APP_URL = 'https://app.transplantlog.com/';

const rawBase = import.meta.env.BASE_URL;
export const BASE = rawBase.endsWith('/') ? rawBase : rawBase + '/';
