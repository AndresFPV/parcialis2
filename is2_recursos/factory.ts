
class EmpleadoFactory
{
    obtenerEmpleado(tipo : string) : Empleado | null
    {
        if (tipo == "cocinero")
        {
            return new Cocinero()
        }else if (tipo == "llamador")
        {
            return new Llamador()
        }else if (tipo == "mozo")
        {
            return new Mozo()
        }else
        {
            return null
        }

    }
}

interface Empleado{
    nombre :string
    recibirSueldo(sueldo : number)
}

class Mozo implements Empleado
{
    nombre : string
    recibirSueldo(sueldo : number)
    {
        console.log(`Un mozo recibio sueldo: ${sueldo} `)
    }
}

class Cocinero implements Empleado
{
    nombre : string
    recibirSueldo(sueldo : number)
    {
        console.log(`Un cocinero recibio sueldo: ${sueldo} `)
    }
}

class Llamador implements Empleado
{
    nombre : string
    recibirSueldo(sueldo : number)
    {
        console.log(`Un llamador recibio sueldo: ${sueldo} `)
    }
}

let factory : Function = () => {
    let tipo : string = process.argv[2] // Obtener params de shell
    let empleadoFactory = new EmpleadoFactory()
    let empleado1 : Empleado = empleadoFactory.obtenerEmpleado(tipo)

    empleado1.recibirSueldo(2000)
}
factory()