import { KeyValue } from "./key-value.model";

export interface CVHeader {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    links: KeyValue[];
}