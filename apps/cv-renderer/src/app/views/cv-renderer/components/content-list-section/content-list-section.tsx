import { KeyValueCmp } from "../../../../common/components/key-value/key-value";
import IconValue from "../../../../common/components/icon-value/icon-value";
import { Component } from "react";
import SectionWrapper from "../section-wrapper/section-wrapper";

interface ContentListSectionProps {
  additionalHeaderClassName?: string;
  title: string;
  list: any[];
  direction?: 'horizontal' | 'vertical';
  render?: 'iconList' | 'keyValueList';
}

export class ContentListSection extends Component<ContentListSectionProps> {
  getDirectionClass() {
    return this.props.direction === 'horizontal' ? 'flex-row' : 'flex-col';
  }

  getListStyleClass() {
    return this.props.render && ['iconList', 'keyValueList'].includes(this.props.render) ? '' : 'pl-8 list-disc';
  }

  getKeyValueListStyleClass() {
    return this.props.render === 'keyValueList' ? 'flex-row' : '';
  }

  getStyleClass() {
    return `${this.getDirectionClass()} ${this.getListStyleClass()} ${this.getKeyValueListStyleClass()}`;
  }

  render () {
    const renderItem = (item: any, index?: number) => {
      switch (this.props.render) {
        case 'iconList':
          return <li key={item}><IconValue value={item} /></li>;
        case 'keyValueList':
          return <li className="p-[2px] text-sm" key={item.key}><KeyValueCmp data={item} /></li> ;
        default:
          return <li className="p-[2px] text-sm" key={item}>{item}</li>;
      }
    };
    return (
      <SectionWrapper title={this.props.title} classNames={this.props.additionalHeaderClassName || ''}>
        <ul className={`flex align-middle justify-center flex-wrap ${this.getStyleClass()}`}>
          { 
            this.props.list.map((item) => renderItem(item))
          }
        </ul>
      </SectionWrapper>
    );
  }
}

export default ContentListSection;
