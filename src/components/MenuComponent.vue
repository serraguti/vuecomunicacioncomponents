<template>
    <ul id="menu">
        <li>
            <router-link to="/">Home | </router-link>
        </li>
        <li>
            <router-link to="/numerodoble/77">Número Doble 77 | </router-link>
        </li>        
        <li>
            <router-link to="/numerodoble/466">Número Doble 466 | </router-link>
        </li>           
        <li>
            <router-link to="/numerodoble">Doble sin número | </router-link>
        </li>
        <li>
            <router-link to="/deportes">Padre Deportes | </router-link>
        </li>
        <li>
            <router-link to="/numeros">Sumar números | </router-link>
        </li>
        <li>
            <router-link to="/comics">Comics | </router-link>
        </li>
        <li>
            <router-link to="/seleccionmultiple">Selección múltiple | </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    ul#menu li {
        display: inline
    }
</style>
