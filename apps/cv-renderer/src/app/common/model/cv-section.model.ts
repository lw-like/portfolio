import { KeyValue } from "./cv-common.model";

export enum CVSectionFields {
    Title = 'title',
    Content = 'content'
}

export interface CVSection {
    [CVSectionFields.Title]: string;
    [CVSectionFields.Content]: string | string[] | KeyValue[]; 
}