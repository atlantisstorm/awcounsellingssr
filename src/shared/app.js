import React, { useRef } from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation';
import NoMatch from './no-match';

const App = () => {
  const navButtonRef = useRef(null);

  const onClickSelectPage = (event) => {
    //event.preventDefault();
    // If the nav button is not collapsed (i.e. we're on a small device),
    // then we want to close(toggle) it when someone has selected a page.
    if (!navButtonRef.current.className.match(/collapsed/g)) {
      navButtonRef.current.click();
    }
  }
  return (
    <div className="container">
      <Navigation onClick={onClickSelectPage} navButtonRef={ navButtonRef } />
      <div className="row">
        <div className="col-12 pt-2 pb-2 pr-3 pl-3">
          <img className="img-fluid mx-auto d-block" src="/images/flowers-butterfly-with-quote.jpg" alt="Mayo Angelo" />
        </div>
      </div>
      <Switch>
      { routes.map(({ path, exact, component: C, ...rest}) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => (
              <C {...props} {...rest} />
            )}
          />
        ))}
        <Route render={(props)=> <NoMatch {...props} />} />
      </Switch>
    </div>
  );
};

export default App;