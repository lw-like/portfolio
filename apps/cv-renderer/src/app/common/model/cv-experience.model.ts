export enum CVExperienceFields {
    Company = 'company',
    Position = 'position',
    WorkType = 'workType',
    StartDate = 'startDate',
    EndDate = 'endDate',
    Stack = 'stack',
    Description = 'description'
}

export interface CVExperience {
    [CVExperienceFields.Company]: string;
    [CVExperienceFields.Position]: string;
    [CVExperienceFields.WorkType]?  : string;
    [CVExperienceFields.StartDate]: string;
    [CVExperienceFields.EndDate]: string;
    [CVExperienceFields.Stack]: string[];
    [CVExperienceFields.Description]: string[];
    duration?: number;
    durationPercentage?: number;
}