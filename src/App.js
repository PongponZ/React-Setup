import './App.css';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import { pageRoute } from './routes'

function App() {
  return (
    <Switch>
      {
        pageRoute.map((routes) => (
          <Route 
            exact={routes.exact}
            key={routes.title}
            path={routes.path} 
            component={routes.component} />
        ))
      }
    </Switch>
  );
}

export default App;
