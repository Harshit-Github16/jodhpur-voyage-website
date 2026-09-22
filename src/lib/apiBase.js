// Central API base for frontend fetches. Set NEXT_PUBLIC_API_BASE in environment.
export const DEFAULT_API_BASE = 'https://jodhpur-voyage-backend.vercel.app';
export const API_BASE = (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_BASE)
    ? process.env.NEXT_PUBLIC_API_BASE
    : DEFAULT_API_BASE;

export default API_BASE;
