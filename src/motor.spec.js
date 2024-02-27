import { expect } from "vitest";
import {
  dameValorCarta,
  dameNumeroAleatorio,
  dameNumeroAleatorioNuevo,
  dameValorCartaNuevo,
  damePuntoDeLaCarta,
  damePuntoDeLaCartaNuevo,
} from "./motor.js"

//Valores de la carta
describe("dameValorCarta", () => {
  it("Valor menor a 7", () => {
    // Arrange
    const value = 3
    const expected = 3
    // Act
    const result = dameValorCarta(value);
    // Assert
    expect(result).toBe(expected)
  }),
    it("El valor es 7", () => {
      // Arrange
      const value = 7
      const expected = 7
      // Act
      const result = dameValorCarta(value);
      // Assert
      expect(result).toBe(expected)
    })
});

describe("dameValorCartaNuevo", () => {
  it("Valor menor a 7", () => {
    // Arrange
    const value = 3
    const expected = 3
    // Act
    const result = dameValorCartaNuevo(value);
    // Assert
    expect(result).toBe(expected)
  })
  it("El valor es 7", () => {
    // Arrange
    const value = 7
    const expected = 7
    // Act
    const result = dameValorCarta(value);
    // Assert
    expect(result).toBe(expected)
  })
});

//Generación de números aleatorios
describe("dameNumeroAleatorio", () => {
  it("Genera un número aleatorio que el resultado que se espera es de 10", () => {
    // Arrange
    vi.spyOn(global.Math, 'random').mockReturnValue(0.999);
    // Act
    const result = dameNumeroAleatorio();
    // Assert
    expect(result).toBe(10)
  })
});

describe("dameNumeroAleatorioNuevo", () => {
  it("Genera un número aleatorio que el resultado que se espera es de 10", () => {
    // Arrange
    vi.spyOn(global.Math, 'random').mockReturnValue(0.999);
    // Act
    const result = dameNumeroAleatorioNuevo();
    // Assert
    expect(result).toBe(10)
  })
});

//Puntos de la carta
describe("damePuntoDeLaCarta", () => {
  it("Si la carta es mayor que 7", () => {
    // Arrange
    const value = 0.5
    const expected = 0.5
    // Act
    const result = damePuntoDeLaCarta(value);
    // Assert
    expect(result).toBe(expected)
  })
  it("Si la carta es menor que 7", () => {
    // Arrange
    const value = 2
    const expected = 2
    // Act
    const result = damePuntoDeLaCarta(value);
    // Assert
    expect(result).toBe(expected)
  })
});

describe("damePuntoDeLaCartaNuevo", () => {
  it("Si la carta es mayor que 7", () => {
    // Arrange
    const value = 0.5
    const expected = 0.5
    // Act
    const result = damePuntoDeLaCartaNuevo(value);
    // Assert
    expect(result).toBe(expected)
  })
  it("Si la carta es menor que 7", () => {
    // Arrange
    const value = 2
    const expected = 2
    // Act
    const result = damePuntoDeLaCartaNuevo(value);
    // Assert
    expect(result).toBe(expected)
  })
});