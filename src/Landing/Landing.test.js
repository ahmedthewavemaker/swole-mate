import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Landing from './Landing';
import { MemoryRouter } from 'react-router-dom';

describe('Landing component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter> <Landing />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MemoryRouter> <Landing />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


});
