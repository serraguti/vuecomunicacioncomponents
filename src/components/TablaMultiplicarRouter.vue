<template>
    <div>
        <h1>Tabla Multiplicar Router</h1>
        <h2 style="color:blue">
            Número recibido: {{numero}}
        </h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="html"></tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TablaMultiplicarRouter", 
        watch: {
            '$route.params.numero'(nextVal, oldVal){
                if (nextVal != oldVal){
                    this.generarTablaMultiplicar();
                }
            }
        },
        mounted() {
            this.generarTablaMultiplicar();
        },
        data() {
            return {
                numero: 0, 
                html: ""
            }
        },
        methods: {
            generarTablaMultiplicar() {
                this.numero = parseInt(this.$route.params.numero);
                this.html = "";
                for (var i = 1; i <= 10; i++){
                    var op = this.numero + " * " + i;
                    var res = this.numero * i;
                    this.html += "<tr>";
                    this.html += "<td>" + op + "</td>";
                    this.html += "<td>" + res + "</td>";
                    this.html += "</tr>";
                }
            }
        }
    }
</script>