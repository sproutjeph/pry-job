import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const URL = "https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete";
