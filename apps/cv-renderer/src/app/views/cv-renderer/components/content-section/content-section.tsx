import { Component, ReactNode } from "react";

export class ContentSection extends Component<{title: string, children: ReactNode}> {
  render(): ReactNode {
    return (
      <section className="flex">
        <div className="mt-10 flex flex-1 flex-row">
          {this.props.children} 
        </div>
      </section>
    );
  }
}

export default ContentSection;
