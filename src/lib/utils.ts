import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function inRange(num: number, start: number, end: number) {
  if (!end) {
    end = start
    start = 0
  }

  return num >= start && num <= end
}
