export const APP_URL = 'https://emmaduttoncodes.github.io/TrackPat/';

const rawBase = import.meta.env.BASE_URL;
export const BASE = rawBase.endsWith('/') ? rawBase : rawBase + '/';
