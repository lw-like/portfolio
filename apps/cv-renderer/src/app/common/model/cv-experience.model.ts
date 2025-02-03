export enum CVExperienceFields {
    Company = 'company',
    Position = 'position',
    StartDate = 'startDate',
    EndDate = 'endDate',
    Description = 'description'
}

export interface CVExperience {
    [CVExperienceFields.Company]: string;
    [CVExperienceFields.Position]: string;
    [CVExperienceFields.StartDate]: string;
    [CVExperienceFields.EndDate]: string;
    [CVExperienceFields.Description]: string[];
}