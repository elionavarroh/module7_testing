import { 
    ganarPartida,
    perderPartida,
    mePlanto,
    gestionarPartida,
    mostrarMensaje,
    resultado,
} from "./ui.js";

describe("ganarPartida", () => {
    it("Debería de devolver un mensaje en el que se muestra que el usuario ha ganado la partida", () =>{
    // Arrange
        const texto = "has ganado la partida";
    // Act
        const resultado = ganarPartida(texto);

    // Assert
    expect(resultado).toBe(ganarPartida);
    })
});
