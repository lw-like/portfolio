import { CVHeader } from "./cv-header.model";
import { CVSection } from "./cv-section.model";
import { KeyValue } from "./key-value.model";

export interface CVDocument {
    header: CVHeader;
    sections: CVSection[];
}