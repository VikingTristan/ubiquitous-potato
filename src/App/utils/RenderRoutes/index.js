import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

const RenderRoutes = ({ path, redirect, routes, appFolder }) => (
    <Switch>
        <Route exact path={path} render={() => <Redirect to={redirect} />}/>
        {routes.map(route => {
            const { path, componentPath } = route;

            const RouteRenderComponent = React.lazy(() => import(/* webpackChunkName: "doc-route.chunk_" */ `../../${appFolder}/${componentPath}/index.js`));

            return <Route key={`doc_route_${path}`} exact path={path} render={() => <RouteRenderComponent />} />;
        })}
        <Redirect from={`${path}/*`} to="/404" />
    </Switch>
);

RenderRoutes.propTypes = {
    path: PropTypes.string.isRequired,
    redirect: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired,
    appFolder: PropTypes.string.isRequired
};

export default RenderRoutes;
