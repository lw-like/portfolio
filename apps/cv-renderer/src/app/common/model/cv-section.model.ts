import { KeyValue } from "./key-value.model";

export interface CVSection {
    title: string;
    content: string | string[] | KeyValue[]; 
}