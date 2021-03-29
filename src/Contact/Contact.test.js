import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Contact from './Contact';
import { MemoryRouter } from 'react-router-dom';

describe('Contact component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter> <Contact />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MemoryRouter> <Contact />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


});
