import { render } from '@testing-library/react';

import ContentSection from './content-section';

describe('ContentSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentSection />);
    expect(baseElement).toBeTruthy();
  });
});
