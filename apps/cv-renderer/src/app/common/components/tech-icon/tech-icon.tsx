import { Component } from "react";

export class TechIcon extends Component<{techName: string, smaller?: boolean}> {

  getIconFileName() {
    const techName = this.props.techName.toLowerCase();
    // @todo: Normalize icons dictionary map
    switch (techName) {
      case 'javascript':
      case 'js':
        return 'JavaScript.svg';

      case 'typescript':
      case 'ts':
        return 'TypeScript.png';

      case 'angular18+':
      case 'material':
        return 'angular.png';

      case 'github actions':
      case 'gh actions':
        return 'github.png';

      case 'gitlab ci/cd':
      case 'gl ci/cd':
        return 'gitlab.png';
        
      case 'angularjs':
      case 'java':
      case 'git':
      case 'node.js':
      case 'keycloak':
      case 'react':
      case 'php':
      case 'typeorm':
      case 'mqtt':
        return `${techName}.svg`;
        
      default:
        return `${techName}.png`;
    }
  }

  render() {
    const fileName = this.getIconFileName();
    return fileName ?(
      <img alt={this.props.techName} title={this.props.techName} className={`${this.props.smaller ? 'h-4' : 'h-7'} fill-black text-black grayscale`} src={`/img/${this.getIconFileName()}`} />
    ) : null;
  }
}

export default TechIcon;
