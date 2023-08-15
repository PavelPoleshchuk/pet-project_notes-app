export const useGetDateNow = () => {
  const monthArr = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const month = monthArr[date.getMonth()];
  return `${month} ${day}, ${year} [${hours}:${minutes}]`
};
