import { IOption } from "types/option.type";
import { TaxPeriod } from "enums/taxPeriod.enum";
import { getTaxPeriod } from "helpers/getTaxPeriod";

export const useTaxPeriodOptions = (): IOption[] => {
    return [
        { value: TaxPeriod.PeriodMonth.toString(), label: getTaxPeriod(TaxPeriod.PeriodMonth) },
        { value: TaxPeriod.PeriodQ1.toString(), label: getTaxPeriod(TaxPeriod.PeriodQ1) },
        { value: TaxPeriod.PeriodQ2.toString(), label: getTaxPeriod(TaxPeriod.PeriodQ2) },
        { value: TaxPeriod.PeriodQ3.toString(), label: getTaxPeriod(TaxPeriod.PeriodQ3) },
        { value: TaxPeriod.PeriodQ4.toString(), label: getTaxPeriod(TaxPeriod.PeriodQ4) },
        { value: TaxPeriod.PeriodYear.toString(), label: getTaxPeriod(TaxPeriod.PeriodYear) },
    ]
}