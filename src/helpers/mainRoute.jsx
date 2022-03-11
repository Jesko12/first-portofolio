import React from "react";
import {Redirect, Route} from "react-router-dom";
import auth from "../services/authService";

const MainRoute = ({component: Component, render, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth.getCurrentUser())
                    return (
                        <Redirect
                            to={{
                                pathname: "/main",
                                state: {from: props.location},
                            }}
                        />
                    );
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

export default MainRoute;
