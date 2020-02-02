class Singleton
{
    private static instance : Singleton | null = null
    nombre : string

    static getInstance() : Singleton
    {
        if (Singleton.instance == null)
        {
            Singleton.instance = new Singleton()   
        }
        return Singleton.instance
    }

    private constructor()
    {}
}

let singleton = () => {
    let singleton = Singleton.getInstance()
    singleton.nombre = "Billy"
    //.....

    let singleton2 = Singleton.getInstance()
    console.log(`Nombre: ${singleton2.nombre}`)
}
singleton()