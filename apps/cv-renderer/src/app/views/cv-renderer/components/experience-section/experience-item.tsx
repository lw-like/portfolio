import { CVExperience, CVExperienceFields } from "../../../../common/model/cv-experience.model";
import { Component } from "react";

export class ExperienceItem extends Component<{item: CVExperience}> {
  render () {
    return (
      <li className="mb-10 text-sm">
        <p className="text-sm text-stone-500">{this.props.item[CVExperienceFields.StartDate]} - {this.props.item[CVExperienceFields.EndDate]}</p>
        <p className="text-md text-stone-700">{this.props.item[CVExperienceFields.Company]} - <small>{this.props.item[CVExperienceFields.WorkType]}</small></p>
        <p>{this.props.item[CVExperienceFields.Position]}</p>
        {this.props.item[CVExperienceFields.Description] ? (
          <p>{this.props.item[CVExperienceFields.Description]}</p>
        ) : ''}
      </li>
    );
  } 
}

export default ExperienceItem;
