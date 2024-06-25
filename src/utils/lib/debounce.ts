let timeout: number;

export function debounce(cb: Function, wait = 500) {
    clearTimeout(timeout);
    timeout = setTimeout(cb, wait);
}