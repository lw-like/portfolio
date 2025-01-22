import { render } from '@testing-library/react';

import CvForm from './cv-form';

describe('CvForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CvForm />);
    expect(baseElement).toBeTruthy();
  });
});
