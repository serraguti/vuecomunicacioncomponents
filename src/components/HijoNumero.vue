<template>
    <div>
        <h1 style="color:blue">
            Hijo Número {{numero}}
        </h1>
        <button @click="callSumarNumerosParent()">
            Sumar {{numero}}
        </button>
    </div>
</template>

<script>
    export default {
        name: "HijoNumero", 
        props: ["numero"], 
        methods: {
            callSumarNumerosParent()  {
                this.$emit("sumarNumeros", this.numero);
            }
        }
    }
</script>