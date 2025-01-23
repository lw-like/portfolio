import { CVHeader } from "./cv-header.model";
import { CVSection } from "./cv-section.model";

export enum CVDocumentFields {
    Header = 'header',
    Sections = 'sections'
}

export interface CVDocument {
    [CVDocumentFields.Header]: CVHeader;
    [CVDocumentFields.Sections]: CVSection[];
}