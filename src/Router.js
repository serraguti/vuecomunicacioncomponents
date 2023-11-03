import {createWebHistory, createRouter} from 'vue-router';
import PadreDeportes from './components/PadreDeportes.vue';
import HomeComponent from './components/HomeComponent.vue';
import PadreNumeros from './components/PadreNumeros.vue';
import ComicsComponent from './components/ComicsComponent.vue';
import SeleccionMultiple from './components/SeleccionMultiple.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import TablaMultiplicarRouter from './components/TablaMultiplicarRouter.vue';


const myRoutes = [
    {
        path: "/", component: HomeComponent
    }, 
    {
        path: "/tablamultiplicar/:numero", component: TablaMultiplicarRouter
    },
    {
        path: "/numerodoble/:numero?", component: NumeroDoble
    },
    {
        path: "/deportes", component: PadreDeportes
    },
    {
        path: "/numeros", component: PadreNumeros
    }, 
    {
        path: "/comics", component: ComicsComponent
    },
    {
        path: "/seleccionmultiple", component: SeleccionMultiple
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;