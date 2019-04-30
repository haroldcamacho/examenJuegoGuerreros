class DecoradorDeArma {
    constructor(armaBase){
        this.arma = armaBase;
        this.nombre = armaBase.obtenerNombre();
        this.danho = armaBase.obtenerDanho();
    }

    decorarArma(armaDecoradora){
        this.danho += armaDecoradora.obtenerDanho();
        this.nombre = this.nombre + armaDecoradora.obtenerNombre();
    }

    obtenerDanho(){
        return this.danho;
    }
}

class Madera {
    constructor() {
        this.danho = 5;
        this.nombre = "Madera"
    }

    obtenerDanho(){
        return this.danho;
    }

    obtenerNombre(){
        return this.nombre;
    }
}

class Metal {
    constructor() {
        this.danho = 10;
        this.nombre = "Metal"
    }

    obtenerDanho(){
        return this.danho;
    }

    obtenerNombre(){
        return this.nombre;
    }
}

class Fuego {
    constructor() {
        this.danho = 30;
        this.nombre = "Fuego"
    }

    obtenerDanho(){
        return this.danho;
    }

    obtenerNombre(){
        return this.nombre;
    }
}

module.exports = {
    Fuego,
    Metal,
    Madera,
    DecoradorDeArma
}