import { Home } from '../pages/Home/Home'
import { EmptyComponent } from '../components/EmptyComponent/EmptyComponent'
import { ItemDetailContainer } from '../containers/Item/Detail/ItemDetailContainer'
import { ItemListContainer } from '../containers/Item/List/ItemListContainer'

export const routes = [
    {
        name: 'Inicio',
        route: '/',
        hasWidget: false,
        component: '',
        icon: null,
        visible: true,
        page: <ItemListContainer />
    },
    {
        name: 'Categorias',
        route: '/catergory/:id',
        hasWidget: false,
        component: '',
        icon: null,
        visible: true,
        page: <ItemListContainer />
    },
    {
        name: 'Productos',
        route: '/products',
        hasWidget: false,
        component: '',
        icon: null,
        visible: true,
        page: <Home />
    },
    {
        name: 'Productos',
        route: '/item/:id',
        hasWidget: false,
        component: '',
        icon: null,
        visible: true,
        page: <ItemDetailContainer />
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
    },
    // {
    //     name: 'Carrito',
    //     route: '/cart',
    //     hasWidget: false,
    //     component: '',
    //     icon: null,
    //     visible: true,
    //     page: <CartProvider> <Cart /></CartProvider>
    // }
]