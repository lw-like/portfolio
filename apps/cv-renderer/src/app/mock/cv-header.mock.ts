import { CVHeader, CVHeaderFields } from "../common/model/cv-header.model";

const mockCVHeader: CVHeader = {
    [CVHeaderFields.Name]: "John Doe",
    [CVHeaderFields.Title]: "Senior Software Engineer",
    [CVHeaderFields.Email]: "john.doe@example.com",
    [CVHeaderFields.Phone]: "+1 (123) 456-7890",
    [CVHeaderFields.Location]: "San Francisco, CA, USA",
    [CVHeaderFields.Links]: [
        { key: "LinkedIn", value: "https://www.linkedin.com/in/johndoe" },
        { key: "GitHub", value: "https://github.com/johndoe" },
        { key: "Portfolio", value: "https://johndoe.com" }
    ]
};