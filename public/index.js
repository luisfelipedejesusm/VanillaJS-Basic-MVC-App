var CREATED = "El cliente ha sido agregado satisfactoriamente.";

var getClienteFromWindow = function(){
    return new Cliente(
        getElem("nombre-cliente"),
        getElem("apellido-cliente")
    )
}

document.addEventListener('DOMContentLoaded', function() {
    firebase.database().ref('clientes').on('value', (snapshot) => {
        tableElem.clientes = snapshot.val();
      });
})

var tableElem = new Vue({
    el: "#table",
    data: {
        clientes: []
    },
    methods: {
        deleteCliente: function(k){
            firebase.database().ref('clientes/'+k).remove()
        }
    }
})

var agregarCliente = _ => {
    saveCliente(
        getClienteFromWindow()
    )
    clearFields()
    showMsg(CREATED)
}

var showMsg = msg => {
    alert(msg)
}

var clearFields = _ => {
    document.getElementById("nombre-cliente").value = ""
    document.getElementById("apellido-cliente").value = ""
}

var saveCliente = cliente => {
    firebase.database().ref('clientes').push().set(cliente)
}

var getElem = _ => document.getElementById(_).value

class Cliente {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}