export const capitalizePathname = (stringToChange: string): string => {
  const tempUrl: string = stringToChange.replace("/", "").replaceAll("-", " ");
  return tempUrl.charAt(0).toUpperCase() + tempUrl.slice(1);
};
