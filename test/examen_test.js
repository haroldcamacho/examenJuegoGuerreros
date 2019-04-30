var expect = require('chai').expect;
import {
    Arquero,
    Infanteria,
    Guerrero
} from '../src/Guerrero.js';

describe("Juego", function () {
    it("Para un guerrero de infanteria deberia tener daño base 10", function () {
        let guerreroInfanteria = new Infanteria();
        let guerrero = new Guerrero(guerreroInfanteria);
        expect(guerrero.obtenerDanhoBase()).equals(10);
    });
    it("Para un guerrero arquero deberia tener daño base 5", function () {
        let guerreroArquero = new Arquero();
        let guerrero = new Guerrero(guerreroArquero);
        expect(guerrero.obtenerDanhoBase()).equals(5);    });
});