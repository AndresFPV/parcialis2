// Observadores
interface Observador
{
    notificarEvento() : void
}

class ObservadorConcreto1 implements Observador
{
    notificarEvento() : void
    {
        console.log("Apunta en block de notas")
    }
}

class ObservadorConcreto2 implements Observador
{
    notificarEvento() : void
    {
        console.log("Apunta en una hoja de papel")
    }
}


// Observado -> emitir/notificar algun evento
class Observado
{
    observadores : Observador[] = []

    agregarObservador(obs : Observador)
    {
        this.observadores.push(obs)
    }

    emitirEvento()
    {
        for (let i=0 ; i < this.observadores.length; i++)
        {
            this.observadores[i].notificarEvento()
        }
    }
}

let observer = () => {
    let profesor = new Observado()
    let marcelo : Observador = new ObservadorConcreto1()
    let aron : Observador = new ObservadorConcreto2()

    profesor.agregarObservador(marcelo)
    profesor.agregarObservador(aron)

    profesor.emitirEvento()
}
observer()