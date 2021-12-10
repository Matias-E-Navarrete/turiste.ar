import { CartWidget } from "../components/Widgets/Cart/CartWidget";

export const navbarRoutes = [
    {
        name: 'Inicio',
        route: '/home',
        component: null,
        icon: null
    },
    {
        name: 'Paquetes',
        route: '/packages',
        component: null,
        icon: null
    },
    {
        name: 'Favoritos',
        route: '/favorites',
        component: null,
        icon: null
    },
    {
        name: 'Carrito',
        route: '/cart',
        component: <CartWidget route="/cart" />,
        icon: null
    },
]