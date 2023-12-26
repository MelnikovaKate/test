export const getTaxPeriod = (taxPeriod: number) => {
    switch (taxPeriod) {
        case 1:
            return 'Месяц';
        case 2:
            return '1 квартал';
        case 3:
            return '2 квартал';
        case 4:
            return '3 квартал';
        case 5:
            return '4 квартал';
        case 6:
            return 'Год';
    
        default:
            return 'Не определен';
    }
}
