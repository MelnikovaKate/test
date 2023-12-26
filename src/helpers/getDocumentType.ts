export const getDocumentType = (type: number) => {
    switch (type) {
        case 1:
            return 'Входящий';
        case 2:
            return 'Исходящий';
    
        default:
            return 'Не определен';
    }
}