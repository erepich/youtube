import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '../components/Button';

afterEach(cleanup);

describe('Button component test', () => {
  test('Button is displayed with button text', async () => {
    const message = 'click me';
    const onClickButton = jest.fn();
    const { getByTestId } = render(
      <Button
        onClickButton = {onClickButton}
        datatestid="testedbutton"
      >
        {message}
      </Button>
    );
    expect(getByTestId('sort-testedbutton')).not.toBeNull();

    fireEvent.click(getByTestId('sort-testedbutton'));
    expect(onClickButton).toHaveBeenCalled();
  });
});
