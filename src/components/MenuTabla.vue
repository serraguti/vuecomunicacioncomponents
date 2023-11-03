<template>
    <div>
        <h1>Menú Tabla</h1>
        <ul id="menu">
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/tablamultiplicar/' + num">
                    Tabla {{num}} | 
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: "MenuTabla", 
        data() {
            return {
                numeros: []
            }
        },
        mounted() {
            for (var i = 1; i <= 5; i++){
                var random = parseInt(Math.random() * 100) + 1;
                this.numeros.push(random);
            }
        }
    }
</script>
