import { expect } from "vitest";
import {
  dameValorCarta,
  dameNumeroAleatorio,
  damePuntoDeLaCarta,
  numeroAleatorio,
} from "./motor.js"

//Valores de la carta
describe("dameValorCarta", () => {
  it("Debería devolver 3 como valor esperado, cuando el número aleatorio es 3", () => {
    // Arrange
    const numeroAleatorio = 3;
    const resultadoEsperado = 3;
    // Act
    const result = dameValorCarta(numeroAleatorio);
    // Assert
    expect(result).toBe(resultadoEsperado);
  }),
    it("Debería devolver un 10 como valor esperado, cuando el número aleatorio es un 8", () => {
      // Arrange
      const numeroAleatorio = 8;
      const resultadoEsperado = 10;
      // Act
      const result = dameValorCarta(numeroAleatorio);
      // Assert
      expect(result).toBe(resultadoEsperado);
    })
});

//Generación de números aleatorios
describe("dameNumeroAleatorio", () => {
  it("Debería devolve un 10 como resultado esperado, cuando el número aleatorio es 0,999", () => {
    // Arrange
    const resultadoEsperado = 10;
    vi.spyOn(global.Math, 'random').mockReturnValue(0.999);
    // Act
    const result = dameNumeroAleatorio(numeroAleatorio);
    // Assert
    expect(result).toBe(resultadoEsperado);
  })
});

//Puntos de la carta
describe("damePuntoDeLaCarta", () => {
  it("Debería de devolver 0.5 como valor esperado, cuando la carta sea 10", () => {
    // Arrange
    const numeroAleatorio = 10;
    const resultadoEsperado = 0.5;
    // Act
    const result = damePuntoDeLaCarta(numeroAleatorio);
    // Assert
    expect(result).toBe(resultadoEsperado);
  })
  it("Debería de devolver 3 como valor esperado, cuando la carta sea 3", () => {
    // Arrange
    const numeroAleatorio = 3;
    const resultadoEsperado = 3;
    // Act
    const result = damePuntoDeLaCarta(numeroAleatorio);
    // Assert
    expect(result).toBe(resultadoEsperado);
  })
});