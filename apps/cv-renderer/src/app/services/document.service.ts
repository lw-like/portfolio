import { AbstractHttpService } from "../common/abstract/abstract-http-service";

export class DocumentService extends AbstractHttpService {
    async fetchDocumentHeader() {
        return await this.get('/mocks/cv-header.json');
    }

    async fetchBasicData() {
        return await this.get('/mocks/cv-basic.json');
    }

    async fetchExperience() {
        return await this.get('/mocks/cv-experience.json');
    }

    async fetchEducation() {
        return await this.get('/mocks/cv-education.json');
    }

    async fetchSoftExperience() {
        return await this.get('/mocks/cv-experience-general.json');
    }

    async fetchTechnologies() {
        return await this.get('/mocks/cv-experience-tech.json');
    }
}