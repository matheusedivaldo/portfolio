export const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

export const START_DATE = new Date(2023, 3, 1); // abril/2023

export const yearsSince = (date, now = new Date()) =>
  Math.max(1, Math.floor((now - date) / (365.25 * 24 * 3600 * 1000)));
