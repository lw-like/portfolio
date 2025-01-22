import { render } from '@testing-library/react';

import DevMenu from './dev-menu';

describe('DevMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DevMenu />);
    expect(baseElement).toBeTruthy();
  });
});
