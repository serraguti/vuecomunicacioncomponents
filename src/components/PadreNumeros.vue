<template>
    <div>
        <h1 style="color:fuchsia">
            Padre Números Component
        </h1>
        <h2 style="color:red">
            La suma es {{suma}}
        </h2>
        <button @click="generarNumero()">
            Nuevo número
        </button>
        <div v-for="num in numeros" :key="num">
            <HijoNumero :numero="num"
            v-on:sumarNumeros="sumarNumeros"/>
        </div>
        
    </div>
</template>

<script>
import HijoNumero from './../components/HijoNumero.vue';
    export default {
        name: "PadreNumeros", 
        components: {
            HijoNumero
        }, 
        methods: {
            generarNumero() {
                var random = parseInt(Math.random() * 100) + 1;
                this.numeros.push(random);
            }, 
            sumarNumeros (numero){
                this.suma += numero;
            }
        },
        data() {
            return {
                suma: 0,
                numeros: [4,7,22]
            }
        }
    }
</script>