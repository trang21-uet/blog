import { ThemeMode } from "./enum";

export const DEFAULT_THEME_MODE = ThemeMode.LIGHT;
export const AN_ERROR_TRY_AGAIN = "Có lỗi xảy ra. Vui lòng thử lại";
export const WRONG_LOGIN_INFO = "Thông tin đăng nhập chưa đúng";

export const DATE_FORMAT_SLASH = "dd/MM/yyyy";
export const DATE_FORMAT_HYPHEN = "dd-MM-yyyy";
export const LONG_TIME_FORMAT = "HH:mm:ss";
export const SHORT_TIME_FORMAT = "HH:mm";
export const DATE_TIME_FORMAT_SLASH = `${DATE_FORMAT_SLASH} ${SHORT_TIME_FORMAT}`;
export const DATE_TIME_FORMAT_HYPHEN = `${DATE_FORMAT_HYPHEN} ${SHORT_TIME_FORMAT}`;

export const HEADER_HEIGHT = 70;

export const API_URL = "http://localhost:4000/api";
export const TOKEN_KEY = "blog-token";
export const BLOG_THUMBNAIL = "https://picsum.photos/1280/720";
