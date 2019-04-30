class Guerrero {
    constructor(tipoDeGuerrero, arma) {
        this.guerrero = tipoDeGuerrero;
        this.arma = arma;
    }

    obtenerDanhoBase() {
        return this.guerrero.obtenerDanhoBase();
    }
    obtenerDanhoArma(){
        return this.arma.calcularDanho();
    }

    calcularDanhoTotal(){
        return this.obtenerDanhoArma() + this.obtenerDanhoBase();
    }
}

class Arquero {
    constructor() {
        this.danhoBase = 5;
    }

    obtenerDanhoBase() {
        return this.danhoBase;
    }
}

class Infanteria {
    constructor() {
        this.danhoBase = 10;
    }

    obtenerDanhoBase() {
        return this.danhoBase;
    }
}

module.exports = {
    Infanteria,
    Arquero,
    Guerrero
}