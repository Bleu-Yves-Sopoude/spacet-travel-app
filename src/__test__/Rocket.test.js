import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from '../components/Rocket';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('MyRocketss', () => {
  it('render Rockets Components', () => {
    render(<Rocket />);
    expect(Rocket).toMatchSnapshot();
  });
});
