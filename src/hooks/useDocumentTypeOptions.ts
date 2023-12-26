import { IOption } from "types/option.type";
import { TaxPeriod } from "enums/taxPeriod.enum";
import { getTaxPeriod } from "helpers/getTaxPeriod";
import { DocumentType } from "enums/documentType.enum";
import { getDocumentType } from "helpers/getDocumentType";

export const useDocumentTypeOptions = (): IOption[] => {
    return [
        { value: DocumentType.In.toString(), label: getDocumentType(DocumentType.In) },
        { value: DocumentType.Out.toString(), label: getDocumentType(DocumentType.Out) },
    ]
}