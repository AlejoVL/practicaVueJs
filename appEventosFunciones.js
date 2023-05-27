new Vue({
    el: '#miApp',
    data: {                
        titulo: "Eventos y funciones",
        mostrar: false,
        contador: 0,
        numero1: 3,
        numero2: 7,
        resultado: 0
    },
    methods:{
        IncrementarContador: function(){
            this.contador = this.contador + 1
            return this.contador
        },

        SumarNumeros: function(){
            return parseInt(this.numero1) + parseInt(this.numero2)
        },

        SumarNumeros2: function(){
            this.resultado = parseInt(this.numero1) + parseInt(this.numero2)
            return this.resultado
        }
    }
})