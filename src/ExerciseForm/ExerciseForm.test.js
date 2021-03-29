import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ExerciseForm from './ExerciseForm';
import { MemoryRouter } from 'react-router-dom';

describe('ExerciseForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter> <ExerciseForm />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MemoryRouter> <ExerciseForm />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


});
