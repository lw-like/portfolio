import { Component, ReactNode } from "react";
import SectionWrapper from "../section-wrapper/section-wrapper";
import { CVExperience, CVExperienceFields } from "../../../../common/model/cv-experience.model";
import ExperienceItem from "./experience-item";
import { EducationItem } from "./education-item";

interface ContentListSectionProps {
  additionalHeaderClassName?: string;
  title: string;
  data?: CVExperience[];
  type?: 'education' | undefined
}

export class ExperienceSection extends Component<ContentListSectionProps> {
  render(): ReactNode {
    return (
      <SectionWrapper title={this.props.title} classNames={this.props.additionalHeaderClassName || ''}>
        <ul>
          {
            this.props.data && this.props.data.map((item) => {
              return this.props.type === 'education' ? (
                <EducationItem key={item[CVExperienceFields.Company] + item[CVExperienceFields.StartDate]} item={item} />
              ) : (
                <ExperienceItem  key={item[CVExperienceFields.Company] + item[CVExperienceFields.StartDate]} item={item} />
              )
            })
          }
        </ul>
      </SectionWrapper>
    );
  }
}

export default ExperienceSection;
