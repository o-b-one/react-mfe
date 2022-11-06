import { render } from '@testing-library/react';

import CustomizeNavbar from './customize-navbar';

describe('CustomizeNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< CustomizeNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
