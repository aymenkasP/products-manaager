import { Route, Redirect,} from "react-router-dom";

  function PrivateRoute({ children, ...rest }) {

    const userId = localStorage.getItem('userId');
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
        userId ? (
            children
            
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute
