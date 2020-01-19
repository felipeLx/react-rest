import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import Quotes from './containers/Quotes/Quotes';
// import Data from './containers/Data/Data';
// import ProductsPage from './containers/Products/Products';

const FavoritesPage = React.lazy(() => {
  return import ('./containers/Favorites/Favorites');
});

const Auth = React.lazy(() => {
  return import ('./containers/Auth/Auth');
});

const app = React.memo(props => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" render={props => <Auth {...props} />} />
      {/* <Route path="/" exact component={ProductsPage} /> */}
      {/* <Route path="/" exact component={Data} /> */}
      <Route path="/" exact component={Quotes} />
      <Redirect to="/" />
    </Switch>
  );

  if(props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/" exact component={Quotes} />
        {/* <Route path="/" exact component={Data} /> */}
        {/* <Route path="/" exact component={ProductsPage} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }

    return (
      <div>
        <Layout>
          <Suspense fallback={<p>Loading...</p>} >
          {routes}
          </Suspense>
        </Layout>
      </div>
  );
});

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (app));
