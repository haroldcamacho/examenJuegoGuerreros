class DecoradorArma {
    constructor(armaDecorada){
        this.armaDecorada = armaDecorada;
    }

    decorarArma(){

    }

    obtenerDanho(){
        return this.armaDecorada.obtenerDanho();
    }
}

class Madera {
    constructor() {
        this.danho = 5;
    }

    obtenerDanho(){
        return this.danho;
    }
}

class Metal {
    constructor() {
        this.danho = 10;
    }

    obtenerDanho(){
        return this.danho;
    }
}

class Fuego {
    constructor() {
        this.danho = 30;
    }

    obtenerDanho(){
        return this.danho;
    }
}