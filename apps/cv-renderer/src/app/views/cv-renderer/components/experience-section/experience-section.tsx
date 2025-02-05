import { Component, ReactNode } from "react";
import SectionWrapper from "../section-wrapper/section-wrapper";

interface ContentListSectionProps {
  additionalHeaderClassName?: string;
  title: string;
}

export class ExperienceSection extends Component<ContentListSectionProps> {
  render(): ReactNode {
    return (
      <SectionWrapper title={this.props.title} classNames={this.props.additionalHeaderClassName || ''}>
        Test
      </SectionWrapper>
    );
  }
}

export default ExperienceSection;
