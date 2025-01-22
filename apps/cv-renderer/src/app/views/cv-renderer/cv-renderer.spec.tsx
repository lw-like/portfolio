import { render } from '@testing-library/react';

import CvRenderer from './cv-renderer';

describe('CvRenderer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CvRenderer />);
    expect(baseElement).toBeTruthy();
  });
});
