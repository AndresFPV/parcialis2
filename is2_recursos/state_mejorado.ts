
interface EstadoCivil
{
    persona : Persona
    casar() : void
    divorciar() : void
    morir() : void
    enviudar() : void
    toString() : string
}
class EstadoSoltero implements EstadoCivil
{
    persona: Persona;
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }

    divorciar() {}

    morir() {
        this.persona.estadoCivil = new EstadoDifunto(this.persona)
    }

    enviudar() {}

    toString()
    {
        return "Soltero"
    }
}

class EstadoCasado implements EstadoCivil
{
    persona: Persona;
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {}

    divorciar() {
        this.persona.estadoCivil = new EstadoDivorciado(this.persona)
    }
    morir() {
        this.persona.estadoCivil = new EstadoDifunto(this.persona)
    }
    enviudar() {
        this.persona.estadoCivil = new EstadoViudo(this.persona)
    }
    toString()
    {
        return "Casado"
    }
}

class EstadoDivorciado implements EstadoCivil
{
    persona: Persona;
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }

    divorciar() {}

    morir() {
        this.persona.estadoCivil = new EstadoDifunto(this.persona)
    }

    enviudar() {}

    toString()
    {
        return "Divorciado"
    }
}

class EstadoViudo implements EstadoCivil
{
    persona: Persona;
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }

    divorciar() {}

    morir() {
        this.persona.estadoCivil = new EstadoDifunto(this.persona)
    }

    enviudar() {}

    toString()
    {
        return "Viudo"
    }
}

class EstadoDifunto implements EstadoCivil
{
    persona: Persona;
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {}
    divorciar() {}
    morir() {}
    enviudar() {}

    toString()
    {
        return "Difunto"
    }
}

class Persona
{
    estadoCivil : EstadoCivil

    constructor()
    {
        this.estadoCivil = new EstadoSoltero(this)
    }
    casar()
    {
        this.estadoCivil.casar()
    }
    divorciar()
    {
        this.estadoCivil.divorciar()
    }
    enviudar()
    {
        this.estadoCivil.enviudar()
    }
    morir()
    {
        this.estadoCivil.morir()
    }
}

let state : Function = () =>{
    let billy : Persona = new Persona()
    billy.casar()
    billy.casar()

    console.log(`El estado de Billy es: ${billy.estadoCivil.toString()}`)

    let beto : Persona = new Persona()
    beto.divorciar()
    beto.enviudar()
    beto.morir()

    beto.casar()

    console.log(`El estado de Beto es: ${beto.estadoCivil.toString()}`)

    
}
state()