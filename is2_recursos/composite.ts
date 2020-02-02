abstract class ComponentePC
{
    hijos : ComponentePC[] = []
    agregarHijo(componente : ComponentePC)
    {
        this.hijos.push(componente)
    }
    abstract calcularPrecio() : number
}

class Computadora extends ComponentePC
{
    calcularPrecio() : number
    {
        let total = 0
        for (let i=0; i < this.hijos.length; i++)
        {
            total += this.hijos[i].calcularPrecio()
        }
        return total
    }
}
class Monitor extends ComponentePC
{
    precio : number
    constructor(precio : number)
    {
        super()
        this.precio = precio
    }
    calcularPrecio() : number
    {
        return this.precio
    }
}
class Teclado extends ComponentePC
{
    precio : number
    constructor(precio : number)
    {
        super()
        this.precio = precio
    }
    calcularPrecio() : number
    {
        return this.precio
    }
}
class Mouse extends ComponentePC
{
    precio : number
    constructor(precio : number)
    {
        super()
        this.precio = precio
    }
    calcularPrecio() : number
    {
        return this.precio   
    }
}
class CPU extends ComponentePC
{
    calcularPrecio() : number
    {
        let total = 0
        for (let i=0; i < this.hijos.length; i++)
        {
            total += this.hijos[i].calcularPrecio()
        }
        return total
    }
}
class Memoria extends ComponentePC
{
    precio : number
    constructor(precio : number)
    {
        super()
        this.precio = precio
    }
    calcularPrecio() : number
    {
        return this.precio
    }
}
class Placa extends ComponentePC
{
    precio : number
    constructor(precio : number)
    {
        super()
        this.precio = precio
    }
    calcularPrecio() : number
    {
        return this.precio
    }
}
class TarjetaGrafica extends ComponentePC
{
    precio : number
    constructor(precio : number)
    {
        super()
        this.precio = precio
    }
    calcularPrecio() : number
    {
        return this.precio   
    }
}
class Procesador extends ComponentePC
{
    precio : number
    constructor(precio : number)
    {
        super()
        this.precio = precio
    }
    calcularPrecio() : number
    {
        return this.precio   
    }
}
class Disco extends ComponentePC
{
    precio : number
    constructor(precio : number)
    {
        super()
        this.precio = precio
    }
    calcularPrecio() : number
    {
        return this.precio   
    }
}

let composite = () => {
    //1. Definir la estructura
    let comp = new Computadora()
    let monitor = new Monitor(200)
    let teclado = new Teclado(100)
    let mouse = new Mouse(10)
    let cpu = new CPU()
    let procesador = new Procesador(300)
    let memoria1 = new Memoria(150)
    let memoria2 = new Memoria(150)
    let tg = new TarjetaGrafica(300)
    let disco = new Disco(200)
    let placa = new Placa(100)

    cpu.agregarHijo(procesador)
    cpu.agregarHijo(memoria1)
    cpu.agregarHijo(memoria2)
    cpu.agregarHijo(tg)
    cpu.agregarHijo(disco)
    cpu.agregarHijo(placa)

    comp.agregarHijo(monitor)
    comp.agregarHijo(teclado)
    comp.agregarHijo(mouse)
    comp.agregarHijo(cpu)

    //2. Llamamos a la funcion que se ejecutar sobre la estructura
    let precio = comp.calcularPrecio()
    console.log(`El precio es: ${precio}`)
}

composite()