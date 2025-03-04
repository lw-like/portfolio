import IconValue from "../../../../common/components/icon-value/icon-value";
import { CVExperience, CVExperienceFields } from "../../../../common/model/cv-experience.model";
import { Component } from "react";

export class ExperienceItem extends Component<{item: CVExperience}> {
  render () {
    return (
      <li className="mb-10 text-sm">
        <div className="flex items-center">
          <p className="text-sm text-stone-500">{this.props.item[CVExperienceFields.StartDate]} - {this.props.item[CVExperienceFields.EndDate]}</p>
          <div className="ml-4">
            <p className="text-stone-700">{this.props.item[CVExperienceFields.Company]} <span className="text-stone-400">({this.props.item[CVExperienceFields.WorkType]})</span></p>
            <p>{this.props.item[CVExperienceFields.Position]}</p>
            {this.props.item[CVExperienceFields.Description] ? (
              <p>{this.props.item[CVExperienceFields.Description]}</p>
            ) : ''}
          </div>
        </div>
        <div>
          <ul className="flex">
            {
              this.props.item[CVExperienceFields.Stack].map((item) => 
              <li key={item}>
                <IconValue value={item} smaller={true} />
              </li>)
            }
          </ul>
        </div>
      </li>
    );
  } 
}

export default ExperienceItem;
