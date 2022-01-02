import { Home } from '../pages/Home/Home'
import { EmptyComponent } from '../components/EmptyComponent/EmptyComponent'

export const navbarRoutes = [

    {
        name: 'Inicio',
        route: '/',
        hasWidget: false,
        component: '',
        icon: null,
        visible: true,
        page: <Home />
    },
    {
        name: 'Paquetes',
        route: '/packages',
        hasWidget: false,
        component: '',
        icon: null,
        visible: true,
        page: <EmptyComponent />
    },
    {
        name: 'Favoritos',
        route: '/favorites',
        hasWidget: false,
        component: '',
        icon: null,
        visible: true,
        page: <EmptyComponent />
    }
]