import {Database} from "sqlite3";
import * as pouchdb from "pouchdb"

interface Alumno
{
    codigo : string
    nombre : string
    carrera : string
}

class DBFactory
{
    obtenerAdapter(tipo : string) : DBAdapter | null
    {
        if (tipo == "sqlite3")
        {
            return new SQLiteAdapter()
        }else if (tipo == "pouchdb")
        {
            return new PouchdbAdapter()
        }else
        {
            return null
        }
    }
}

interface DBAdapter
{
    conectar() : void
    crearEstructura() : void
    insertarAlumno(alumno : Alumno) : void
    cerrar() : void
}

class SQLiteAdapter implements DBAdapter
{
    db : Database | null = null

    cerrar() : void {
        if (this.db != null)
        {
            this.db.close()
            this.db = null
        }
    }

    insertarAlumno(alumno : Alumno) : void {
        if (this.db != null)
        {
            this.db.run(`INSERT INTO alumno VALUES ('${alumno.codigo}', 
                            '${alumno.nombre}', '${alumno.carrera}')`)
        }
    }
    crearEstructura(): void {
        if (this.db != null)
        {
            console.log("crear")
            this.db.run(`CREATE TABLE alumno
                            (codigo TEXT,
                             nombre TEXT,
                             carrera TEXT)`)
        }
    }
    conectar(): void {
        this.db = new Database("alumnos.sqlite")
    }

}
class PouchdbAdapter implements DBAdapter
{
    db : PouchDB.Database | null = null

    cerrar() : void {
        if (this.db != null)
        {
            this.db.close()
            this.db = null
        }
    }
    insertarAlumno(alumno : Alumno) : void {
        if (this.db != null)
        {
            let doc = {
                codigo : alumno.codigo,
                nombre : alumno.nombre,
                carrera : alumno.carrera
            }
            this.db.put(doc)
        }
    }
    crearEstructura(): void {}
    conectar(): void {
        this.db = new pouchdb("./alumnos.db")
    }

}

let adapter = () => {
    let tipo : string = process.argv[2]
    let factory : DBFactory = new DBFactory()
    let adapter : DBAdapter = factory.obtenerAdapter(tipo)
    adapter.conectar()
    adapter.crearEstructura()
    adapter.insertarAlumno({
        codigo : "20123432",
        nombre : "Billy",
        carrera : "Sistemas"
    })
    adapter.cerrar()
}

adapter()