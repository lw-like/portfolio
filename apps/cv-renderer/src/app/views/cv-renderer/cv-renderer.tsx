import { Axios, AxiosResponse } from "axios";
import { CVHeaderMock } from "../../mock/cv-header.mock";
import { DocumentService } from "../../services/document.service";
import ContentSection from "./components/content-section/content-section";
import HeaderSection from "./components/header-section/header-section";
import { CVHeader } from "../../common/model/cv-header.model";
import { useEffect, useState } from "react";
import { CVExperience } from "../../common/model/cv-experience.model";

export function CvRenderer() {
  const documentService = new DocumentService();
  const [cvHeader, setCvHeader] = useState<CVHeader>(CVHeaderMock);
  const [cvExperience, setCvExperience] = useState<CVExperience[]>([]);

  useEffect( () => {
    documentService.fetchDocumentHeader()
      .then((res: AxiosResponse) => {
        setCvHeader(res.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  useEffect( () => {
    documentService.fetchExperience()
      .then((res: AxiosResponse) => {
        setCvExperience(res.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <main>
          <HeaderSection data={cvHeader} />
      <div>
        <ContentSection />
      </div>
    </main>
  );
}

export default CvRenderer;
