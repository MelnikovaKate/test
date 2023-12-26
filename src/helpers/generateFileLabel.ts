export const generateFileLabel = (length: number) => {
    if (length === 1) {
        return 'Файл';
    } else if (length > 1 && length < 5) {
        return 'Файла';
    } else {
        return 'Файлов';
    }
}