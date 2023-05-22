import slugify from "slugify";
export function filterFields(object, keys) {
    Object.keys(object).forEach((key) => {
        if (keys.indexOf(key) == -1) {
            delete object[key];
        }
    });
}

export function useSlug(string) {
    return slugify(string, {
        lower: true,
        trim: true,
    });
}
export function useRegisterId(prefix) {
    const min = 1000000000, max = 9999999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${prefix ?? 'KP'}${randomNumber}`;
}