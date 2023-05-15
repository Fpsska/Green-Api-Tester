export function makeStringReplacement(value: string): string {
    return value ? value.replace(/\D/g, '') : value;
}
