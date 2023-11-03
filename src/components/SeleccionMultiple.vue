<template>
    <div>
        <h1>Selección múltiple Forms</h1>
        <form v-on:submit.prevent="mostrarSeleccionados()">
            <select multiple="true" size="7"
            v-model="seleccionados">
                <option v-for="option in opciones" :key="option">
                    {{option}}
                </option>
            </select>
            <button>
                Mostrar seleccionados
            </button>
         </form>
         <h2 style="color:blue">
            {{datos}}
         </h2>
    </div>
</template>

<script>
    export default {
        name: "SeleccionMultiple", 
        methods: {
            mostrarSeleccionados() {
                this.datos = "";
                for (var option of this.seleccionados){
                    this.datos += option + ",";
                }
                console.log("Seleccionados");
            }
        },
        data() {
            return {
                opciones: ["Opción A", "Opción B", "Opción C"
                , "Opción D", "Opción E"], 
                seleccionados: [], 
                datos: ""
            }
        }
    }
</script>