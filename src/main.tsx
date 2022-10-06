import ReactDOM from 'react-dom/client';
import './index.css';
import BrowserRouter from '~/libs/BrowserRouter';
import Router from '~/libs/Router';
import Route from '~/libs/Route';
import Root from '~/pages/Root';
import About from '~/pages/About';

const container = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(container).render(
  <BrowserRouter basename="/mini-react-router">
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </BrowserRouter>,
);
