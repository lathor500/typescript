/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {render, fireEvent} from '@testing-library/react-native';
import * as React from 'react';

import App from '../../App'
jest.useFakeTimers();
// eslint-disable-next-line no-undef
test('form submits two answers', () => {
  // eslint-disable-next-line no-undef
  const mockFn = jest.fn();

  const {getAllByA11yLabel, getByText} = render(
    // eslint-disable-next-line prettier/prettier
    <App/>
  );

  const answerInputs = getAllByA11yLabel('answer input');

  fireEvent.changeText(answerInputs[0], 'a1');
  fireEvent.changeText(answerInputs[1], 'a2');
  fireEvent.press(getByText('Submit'));

  // eslint-disable-next-line no-undef
  expect(mockFn).toBeCalledWith({
    '1': {q: 'q1', a: 'a1'},
    '2': {q: 'q2', a: 'a2'},
  });
});
