import { Route } from 'react-router'
import { Link } from '../components/Link/Link'
// Read navbar routes and return it ready to use in NavbarComponent
export const getRoutes = routes => {
    routes.route.forEach((r, key) => {
        if (!r && !r.visible) return null;

        if (r && r.hasWidget) {

            return <Route
                path={r.route}
                component={r.component}
                key={key}
                exact
            />;
        } else {
            return <Link key={key} name={r.name} route={r.route} />
        }
    });
}