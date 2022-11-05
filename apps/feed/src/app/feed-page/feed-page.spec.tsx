import { render } from '@testing-library/react';

import FeedPage from './feed-page';

describe('FeedPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< FeedPage />);
    expect(baseElement).toBeTruthy();
  });
});
