export const setAccessToken = (token: string) => {
    localStorage.setItem(import.meta.env.VITE_TOKEN!, token); 
}

export const getAccessToken = () => {
    const token = localStorage.getItem(import.meta.env.VITE_TOKEN!) || 'Token not found';
    return token;
}

export const removeAccessToken = () => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN!);
}