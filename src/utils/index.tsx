import { DATE_FORMAT_SLASH, TOKEN_KEY } from "@/constant";
import { format, parseISO } from "date-fns";

export const formatDate = (
  value?: string | number | Date,
  dateFormat = DATE_FORMAT_SLASH,
) => {
  try {
    if (!value) throw "Error";
    if (typeof value === "string") {
      value = parseISO(value);
    }
    return format(value, dateFormat);
  } catch (error) {
    return "--";
  }
};

export const getAccessToken = () => {
  if (typeof window === "undefined") return;
  return localStorage.getItem(TOKEN_KEY);
};
