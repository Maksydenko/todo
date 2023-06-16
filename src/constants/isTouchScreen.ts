import { isBrowser } from "./isBrowser";

export const isTouchScreen =
  isBrowser && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
