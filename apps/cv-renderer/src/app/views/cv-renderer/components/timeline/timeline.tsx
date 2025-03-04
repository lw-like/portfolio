import { Component } from "react";
import { CVExperience, CVExperienceFields } from "../../../../common/model/cv-experience.model";
import TimelineItem from "./timeline-item";

const MONTH_IN_MS = 1000 * 60 * 60 * 24 * 30;

export class Timeline extends Component<{experiences: CVExperience[]}> {
  sort() {
    this.props.experiences.sort((a: CVExperience, b: CVExperience) => {
      return new Date(a[CVExperienceFields.StartDate]).getTime() - new Date(b[CVExperienceFields.StartDate]).getTime();
    });
  }

  calculateDuration(experience: CVExperience) {
    const startDate = new Date(experience[CVExperienceFields.StartDate]);
    const endDate = new Date(experience[CVExperienceFields.EndDate]);
    
    return Math.floor((endDate.getTime() - startDate.getTime()) / MONTH_IN_MS);
  }

  calculateDurationPercentage(total: number, experience: CVExperience) {
    return Math.floor(experience.duration! * (100 / total));
  }

  calculateTotalDuration() {
    return this.props.experiences.reduce((acc, experience) => acc + experience.duration!, 0);
  }

  getStyles(experience: CVExperience) {
    return {
      width: `20%`,
    };
  }

  updateExperiences() {
    const total = this.calculateTotalDuration();

    this.props.experiences.map((experience) => {
      experience.duration = this.calculateDuration(experience);
      experience.durationPercentage = this.calculateDurationPercentage(total, experience);
    });
  }

  render () {
    this.updateExperiences();
    this.sort();
    
    return (
      <div className="flex flex-1 flex-col">
        <ul className="flex mt-16 pt-16 h-33 ">
          { this.props.experiences.map((experience) => 
            <TimelineItem key={experience[CVExperienceFields.Company]} experience={experience} />
          ) }
        </ul>
      </div>
    );
  }
}

export default Timeline;
