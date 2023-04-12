export const getStartDate = (timezone) => {
  const split = timezone.split(":");
  const timezoneOffset =
    +split[0] * 60 + +split[1] + new Date().getTimezoneOffset();

  return new Date(Date.now() + timezoneOffset * 60 * 1000);
};
