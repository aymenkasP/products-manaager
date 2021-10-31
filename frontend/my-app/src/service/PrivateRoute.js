import { Route, Redirect,} from "react-router-dom";

  function PrivateRoute({ children, ...rest }) {

    const userId ="615c6e3ff77fd424b4ba2f83"

    
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
