import {toasted}  from './Toasted';

export const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const successAlert = toasted.success;
export const errorAlert = toasted.error;