import { AxiosResponse } from "axios";
import { DocumentService } from "../../services/document.service";
import ContentSection from "./components/content-section/content-section";
import HeaderSection from "./components/header-section/header-section";
import { CVHeader } from "../../common/model/cv-header.model";
import { useEffect, useState } from "react";
import { CVExperience } from "../../common/model/cv-experience.model";
import ContentListSection from "./components/content-list-section/content-list-section";
import Footer from "./components/footer/footer";
import ExperienceSection from "./components/experience-section/experience-section";
import { KeyValue } from "../../common/model/cv-common.model";

export function CvRenderer() {
  const documentService = new DocumentService();
  const [cvHeader, setCvHeader] = useState<CVHeader>();
  const [cvBasic, setCvBasic] = useState<KeyValue[]>([]);
  const [cvEducation, setCvEducation] = useState<CVExperience[]>([]);
  const [cvExperience, setCvExperience] = useState<CVExperience[]>([]);
  const [cvSoftExp, setCvSoftExp] = useState<string[]>([]);
  const [cvTechnologies, setCvTechnologies] = useState<string[]>([]);

  function fetchData(method: keyof DocumentService, setter: React.Dispatch<any>) {
    documentService[method]()
      .then((res: AxiosResponse) => setter(res.data))
      .catch((error) => {
        console.warn(error);
      });
  }

  useEffect( () => fetchData('fetchBasicData', setCvBasic), []);
  useEffect( () => fetchData('fetchDocumentHeader', setCvHeader), []);
  useEffect( () => fetchData('fetchEducation', setCvEducation), []);
  useEffect( () => fetchData('fetchExperience', setCvExperience), []);
  useEffect( () => fetchData('fetchSoftExperience', setCvSoftExp), []);
  useEffect( () => fetchData('fetchTechnologies', setCvTechnologies), []);

  return (
    <main>
      {cvHeader ? 
      <HeaderSection data={cvHeader} />
      : null
      }
        {/* <ContentSection title="Oś czasu">
          <Timeline experiences={cvExperience} />
        </ContentSection> */}
        <ContentSection title="Podsumowanie">
          <div className="flex-1">
            <ContentListSection 
              title="" 
              additionalHeaderClassName="text-[6.4rem]  absolute bottom-[-1.23rem] right-0 translate-x-[2.18rem] [writing-mode:sideways-lr] text-stone-300 " 
              render="keyValueList" 
              list={cvBasic} />

            <ExperienceSection
              title="Wykształcenie"
              data={cvEducation}
              type="education"
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

          
        <ContentSection title="Doświadczenie">
          <ExperienceSection
                title="Doświadczenie"
                data={cvExperience}
              />
        </ContentSection>
      <Footer />
    </main>
  );
}

export default CvRenderer;
