import {createWebHistory, createRouter} from 'vue-router';
import PadreDeportes from './components/PadreDeportes.vue';
import HomeComponent from './components/HomeComponent.vue';
import PadreNumeros from './components/PadreNumeros.vue';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    }, 
    {
        path: "/deportes", component: PadreDeportes
    },
    {
        path: "/numeros", component: PadreNumeros
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;