import { KeyValue } from "./cv-common.model";

export enum CVHeaderFields {
    Name = 'name',
    Title = 'title',
    Email = 'email',
    Phone = 'phone',
    Location = 'location',
    Links = 'links'
}

export interface CVHeader {
    [CVHeaderFields.Name]: string;
    [CVHeaderFields.Title]: string;
    [CVHeaderFields.Email]: string;
    [CVHeaderFields.Phone]: string;
    [CVHeaderFields.Location]: string;
    [CVHeaderFields.Links]: KeyValue[];
}