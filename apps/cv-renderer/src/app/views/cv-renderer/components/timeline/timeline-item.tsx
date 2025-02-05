import { Component } from "react";
import { CVExperience, CVExperienceFields } from "../../../../common/model/cv-experience.model";

export class TimelineItem extends Component<{experience: CVExperience}> {

  getStyles() {
    return {
      width: `20%`,
    };
  }

  render() {
    return (
    <li className="relative border-b" style={this.getStyles()}>
                
                <p className="absolute -rotate-45 w-[150px] translate-y-[-80px] translate-x-[-20px] text-sm">{this.props.experience[CVExperienceFields.Company]}</p>
                <div className="absolute translate-y-[-8px] translate-x-[-3px] bg-stone-500 size-4 rounded-full"></div>
                <div className="absolute"></div>
                <p className="absolute left-0 flex right-0 text-left translate-y-[-16px] text-[10px] pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-stone-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75-3.751m0 0-3.75-3.75m3.75 3.75H3.74V19.5" />
                </svg>
    
                  {this.props.experience[CVExperienceFields.StartDate]}
                </p> 
                <p className="absolute left-0 right-0 text-right text-[10px] flex justify-self-end">
                  <span>{this.props.experience[CVExperienceFields.EndDate]}</span>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-stone-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499" />
                  </svg>
                  </span>
                </p>
              </li>
      );
  }
}

export default TimelineItem;
