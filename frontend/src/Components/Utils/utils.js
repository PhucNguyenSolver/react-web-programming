export const timeSince = (date) => {

  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " năm trước";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " tháng trước";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " ngày trước";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " giờ trước";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " phút trước";
  }
  return "Vài giây trước";
  // return Math.floor(seconds) + " giây trước";
}

export function numberWithCommas(floatNumb) {
  if (floatNumb) {
    return Math.round(floatNumb).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  };
  return 0;
}