import '@testing-library/jest-dom/extend-expect';
import LoginView from './LoginView';
import * as render from 'react-dom';

describe('<LoginView />', () => {
  test('it should mount and have this words above', () => {
    render(<LoginView />);
  });
});