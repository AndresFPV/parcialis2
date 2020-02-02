interface Reclamo
{
    producto : string
    monto : number
}

abstract class EmpleadoTienda
{
    sucesor : EmpleadoTienda
    agregarSucesor(empleado : EmpleadoTienda)
    {
        this.sucesor = empleado
    }
    abstract resolverReclamo(reclamo : Reclamo) : void
}
class Vendedor extends EmpleadoTienda
{
    resolverReclamo(reclamo: Reclamo) {
        // El vendedor puede resolver el reclamo para montos
        // menores a 300
        if (reclamo.monto < 300)
        {
            console.log("El vendedor resolvio el reclamo")
        }else
        {
            this.sucesor.resolverReclamo(reclamo)
        }
    }

}
class Supervisor extends EmpleadoTienda
{
    resolverReclamo(reclamo: Reclamo) {
        // El supervisor puede resolver el reclamo para montos
        // mayores iguales a 300 pero menores a 500
        if (reclamo.monto >= 300 && reclamo.monto < 500)
        {
            console.log("El supervisor resolvio el reclamo")
        }else
        {
            this.sucesor.resolverReclamo(reclamo)
        }
    }

}
class Gerente extends EmpleadoTienda
{
    resolverReclamo(reclamo: Reclamo) {
        // El gerente puede resolver para montos mayor iguales a 500
        console.log("El gerente resolvio el reclamo")
    }

}

let chain = () => {
    //1. Armar nuestra cadena de responsabilidad
    let vendedor : EmpleadoTienda = new Vendedor()
    let supervisor : EmpleadoTienda = new Supervisor()
    let gerente : EmpleadoTienda = new Gerente()
    vendedor.agregarSucesor(supervisor)
    supervisor.agregarSucesor(gerente)

    let reclamo : Reclamo = {
        monto : 1000,
        producto : "Zapatillas"
    }

    // 2. Enviamos un mensaje a la cadena de responsabilidad
    vendedor.resolverReclamo(reclamo)
}
chain()