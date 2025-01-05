import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function copyToClipboard(text: string, message?: string) {
  navigator.clipboard.writeText(text);
  toast.success(message);
}
