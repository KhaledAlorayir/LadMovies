export const getImg = (url, size) =>
  `https://image.tmdb.org/t/p/w${size}${url}`;

export const getFullImg = (url) => `https://image.tmdb.org/t/p/original${url}`;

export const toHoursAndMinutes = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${hours}h ${padTo2Digits(minutes)}m`;
};

const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};
