class Usuario
{
    tipo : string
    nombre : string
    constructor(tipo : string, nombre : string)
    {
        this.tipo = tipo
        this.nombre = nombre
    }
}

/*enum NetworkState
{
    Idle, Transmitting, Error
}*/

interface NetworkState
{
    red : NetworkCommunicator
    iniciar() : void
    error(mensaje : string, usuarios : Usuario[]) : void
    fin() : void

}

class IddleState implements NetworkState{
    
    red: NetworkCommunicator
    
    constructor(red : NetworkCommunicator)
    {
        this.red.state = red.state
    }
    
    iniciar(){
        //lazy initialization
        /*if (this.red.state = null)
        {
            this.red.state = new IddleState(this.red)
        }*/
    }

    error()
    {

    }

    fin(){}
}

class TransmittingState implements NetworkState
{
    red: NetworkCommunicator
    
    constructor(red : NetworkCommunicator)
    {
        this.red.state = red.state
    }
    
    iniciar(){
    }

    error()
    {

    }

    fin(){}

}


class ErrorState implements NetworkState
{
    red: NetworkCommunicator
    
    constructor(red : NetworkCommunicator)
    {
        this.red.state = red.state
    }
    
    iniciar(){
    }

    error()
    {

    }

    fin(){}
}


let verificarErrorWhatsapp = () =>
{
    let a = Math.random()
    if (a < 0.2) {
        return -1
    }
    return 1 
}

let verificarErrorSMS = () => {
    let a = Math.random()
    if (a < 0.1) {
        return -1
    }
    return 1
}

class NetworkCommunicator
{
    state : NetworkState
    constructor()
    {
        this.state = new IddleState(this.state)
    }

    enviarMensaje(mensaje : string, usuarios : Usuario[])
    {
        this.state = new TransmittingState(this.state)
        for (let i=0; i < usuarios.length; i++)
        {
            if (usuarios[i].tipo == "Whatsapp")
            {
                let r = verificarErrorWhatsapp()
                if (r < 0)
                {
                    this.state = new ErrorState(this.state)
                }else{
                    console.log(`Whatsap -- (${usuarios[i].nombre}) : ${mensaje}`)
                }
                
            }else if (usuarios[i].tipo == "SMS")
            {
                let r = verificarErrorSMS()
                if (r < 0)
                {
                    this.state = new ErrorState(this.state)
                }else{
                    console.log(`SMS -- (${usuarios[i].nombre}) : ${mensaje}`)
                }
                
            }
        }
        this.state = new IddleState(this.state)
    }
}


let main = () => {
    let usuarios : Usuario[] = []

    usuarios.push(new Usuario("Whatsapp", "Lionel"))
    usuarios.push(new Usuario("SMS", "Cristiano"))

    let nc = new NetworkCommunicator()
    nc.enviarMensaje("Mensaje de Prueba", usuarios)
}
main()