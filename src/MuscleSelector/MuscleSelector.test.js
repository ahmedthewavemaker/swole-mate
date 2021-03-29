import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MuscleSelector from './MuscleSelector';
import { MemoryRouter } from 'react-router-dom';

describe('MuscleSelector component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter> <MuscleSelector />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MemoryRouter> <MuscleSelector />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


});
