import { AbstractHttpService } from "../common/abstract/abstract-http-service";

export class DocumentService extends AbstractHttpService {
    async fetchDocumentHeader() {
        return await this.get('/mocks/cv-header.json');
    }

    async fetchExperience() {
        return await this.get('/mocks/cv-experience.json');
    }
}