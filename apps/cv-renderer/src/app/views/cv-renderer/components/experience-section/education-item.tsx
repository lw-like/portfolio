import { CVExperience, CVExperienceFields } from "../../../../common/model/cv-experience.model";
import { Component } from "react";

export class EducationItem extends Component<{item: CVExperience}> {
  render () {
    return (
      <li className="mb-10">
        <p className="text-md text-stone-700">{this.props.item[CVExperienceFields.Company]}</p>
        <p className="text-sm text-stone-500">{this.props.item[CVExperienceFields.StartDate]} - {this.props.item[CVExperienceFields.EndDate]}</p>
        <p>{this.props.item[CVExperienceFields.Position]}</p>
        {this.props.item[CVExperienceFields.Description] ? (
          <p>{this.props.item[CVExperienceFields.Description]}</p>
        ) : ''}
      </li>
    );
  }
}

export default EducationItem;
