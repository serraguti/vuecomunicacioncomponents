<template>
    <div>
        <h2 style="color:blue">
            {{ nombredeporte }}
        </h2>
        <button @click="seleccionarFavorito()">
            Seleccionar favorito
        </button>
    </div>
</template>

<script>
    export default {
        name: "HijoDeporte", 
        props: [ "nombredeporte" ],
        methods: {
            seleccionarFavorito () {
                console.log("Favorito seleccionado");
                //REALIZAMOS LA LLAMADA AL PARENT
                //TENEMOS LA POSIBILIDAD DE ENVIAR PARAMETROS 
                //AL METODO PADRE A CONTINUACIÓN DE LA LLAMADA 
                //Y SEPARADOS POR COMAS
                this.$emit("seleccionarFavoritoParent", this.nombredeporte);
            }
        },
        mounted() {
            console.log(this.nombredeporte);
        }
    }
</script>