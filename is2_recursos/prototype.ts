class Alumno
{
    nombre : string
    edad : number
    clonar() : Alumno
    {
        let al = new Alumno()
        al.nombre = this.nombre
        al.edad = this.edad
        return al
    }
}