import SamuraiJSApp from './App';
import {render, unmountComponentAtNode} from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(<SamuraiJSApp />, div);
  unmountComponentAtNode(div)
});
