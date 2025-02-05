import { Axios, AxiosResponse } from "axios";
import { CVHeaderMock } from "../../mock/cv-header.mock";
import { DocumentService } from "../../services/document.service";
import ContentSection from "./components/content-section/content-section";
import HeaderSection from "./components/header-section/header-section";
import { CVHeader } from "../../common/model/cv-header.model";
import { Ref, useEffect, useState } from "react";
import { CVExperience } from "../../common/model/cv-experience.model";
import Timeline from "./components/timeline/timeline";
import { pagePaddings } from "../../common/consts/page-paddings";
import ContentListSection from "./components/content-list-section/content-list-section";
import Education from "./components/education/education";
import Footer from "./components/footer/footer";
import ExperienceSection from "./components/experience-section/experience-section";

export function CvRenderer() {
  const documentService = new DocumentService();
  const [cvHeader, setCvHeader] = useState<CVHeader>(CVHeaderMock);
  const [cvBasic, setCvBasic] = useState<CVHeader>([]);
  const [cvEducation, setCvEducation] = useState<CVExperience[]>([]);
  const [cvExperience, setCvExperience] = useState<CVExperience[]>([]);
  const [cvSoftExp, setCvSoftExp] = useState<string[]>([]);
  const [cvTechnologies, setCvTechnologies] = useState<string[]>([]);

  function fetchData(method: keyof DocumentService, setter: React.Dispatch<any>) {
    documentService[method]()
      .then((res: AxiosResponse) => setter(res.data))
      .catch((error) => console.warn(error));
  }

  useEffect( () => fetchData('fetchBasicData', setCvBasic), []);
  useEffect( () => fetchData('fetchDocumentHeader', setCvHeader), []);
  useEffect( () => fetchData('fetchExperience', setCvExperience), []);
  useEffect( () => fetchData('fetchSoftExperience', setCvSoftExp), []);
  useEffect( () => fetchData('fetchTechnologies', setCvTechnologies), []);

  return (
    <main>
      <HeaderSection data={cvHeader} />
      <div>
        {/* <ContentSection title="Oś czasu">
          <Timeline experiences={cvExperience} />
        </ContentSection> */}
        <ContentSection title="Podsumowanie doświadczenia">
          <div className="flex-1">
            <ContentListSection 
              title="" 
              additionalHeaderClassName="text-[6.4rem]  absolute bottom-[-1.23rem] right-0 translate-x-[2.18rem] [writing-mode:sideways-lr] text-stone-300 " 
              render="keyValueList" 
              list={cvBasic} />
            <ExperienceSection
              title="Wykształcenie"
            />
            <ContentListSection 
              title="Umiejętności miękkie" 
              additionalHeaderClassName="text-left"
              list={cvSoftExp} />
          </div>
          <div className="flex-1 mt-8">
            <ContentListSection 
              title="Technologie" 
              additionalHeaderClassName="text-center"
              direction="horizontal" 
              render="iconList" 
              list={cvTechnologies} />
          </div>
        </ContentSection>

        <Education />
        {/* <ContentListSection 
          title="Edukacja" 
          list={cvSoftExp} /> */}
      </div>

      <Footer />
    </main>
  );
}

export default CvRenderer;
