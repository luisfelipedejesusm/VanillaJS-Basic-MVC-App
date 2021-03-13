
var getClienteFromWindow = function(){
    return new Cliente(
        getElem("nombre-cliente"),
        getElem("apellido-cliente")
    )
}

var saveCliente = cliente => {
    firebase.database().ref('users/' + userId).set(cliente)
}

var getElem = _ => document.getElementById(_).value

class Cliente {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}