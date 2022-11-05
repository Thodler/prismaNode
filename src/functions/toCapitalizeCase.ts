export const toCapitalizeCase = (word: string | null) => {
    return word ?
        `${word.charAt(0).toUpperCase()}${word.slice(1)}`:
        null
}