let timeout: NodeJS.Timeout;

export function debounce(cb: () => void, wait = 500) {
  clearTimeout(timeout);
  timeout = setTimeout(cb, wait);
}
