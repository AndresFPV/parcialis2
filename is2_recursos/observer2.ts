interface Alumno
{
    codigo : string
    nombre : string
}
interface OnListaAlumnosObtenida
{
    onListaAlumnosObtenida(alumnos: Alumno[]) : void
}

class VisualizarAlumnos implements OnListaAlumnosObtenida
{
    onListaAlumnosObtenida(alumnos: Alumno[]) : void
    {
        for (let i=0; i< alumnos.length; i++)
        {
            console.log(`{codigo : ${alumnos[i].codigo}
                            , nombre: ${alumnos[i].nombre}}`)
        }
    }
}

class AlumnosManager
{
    observer : OnListaAlumnosObtenida
    setObserver(observer : OnListaAlumnosObtenida)
    {
        this.observer = observer
    }
    obtenerListadoAlumnos() : void
    {
        let alumnos : Alumno[] = []
        setTimeout(() => {
            alumnos = [
                {codigo : "20142323", nombre : "Billy"},
                {codigo : "20165656", nombre : "Luisa"}
            ]
            this.observer.onListaAlumnosObtenida(alumnos)
        }, 3000)
    }
}

let observer2 = () => {
    let manager = new AlumnosManager()
    manager.setObserver(new VisualizarAlumnos())
    manager.obtenerListadoAlumnos()
}
observer2()