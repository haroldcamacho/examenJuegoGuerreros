var expect = require('chai').expect;
import {
    Arquero,
    Infanteria,
    Guerrero
} from '../src/Guerrero.js';

import {
    Madera,
    Fuego,
    Metal,
    DecoradorDeArma
} from '../src/DecoradorArma';

describe("Juego", function () {
    it("Para un guerrero de infanteria deberia tener daño base 10", function () {
        let guerreroInfanteria = new Infanteria();
        let guerrero = new Guerrero(guerreroInfanteria);
        expect(guerrero.obtenerDanhoBase()).equals(10);
    });
    it("Para un guerrero arquero deberia tener daño base 5", function () {
        let guerreroArquero = new Arquero();
        let guerrero = new Guerrero(guerreroArquero);
        expect(guerrero.obtenerDanhoBase()).equals(5);
    });
    it("Para arma de fuego y hierro deberia tener daño 40", function () {
        let armaDeFuego = new Fuego();
        let armaDeHierro = new Metal();
        let armaDecorada = new DecoradorDeArma(armaDeFuego);
        armaDecorada.decorarArma(armaDeHierro);
        expect(armaDecorada.obtenerDanho()).equals(40);
    });
    it("Para arma de fuego, hierro y madera deberia tener daño 45", function () {
        let armaDeFuego = new Fuego();
        let armaDeHierro = new Metal();
        let armaDeMadera = new Madera();
        let armaDecorada = new DecoradorDeArma(armaDeFuego);
        armaDecorada.decorarArma(armaDeHierro);
        armaDecorada.decorarArma(armaDeMadera);
        expect(armaDecorada.obtenerDanho()).equals(45);
    });

    
});