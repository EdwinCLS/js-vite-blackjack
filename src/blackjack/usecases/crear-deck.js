import _ from "underscore";

// export const miNombre = "Mario Delgado";

/**
 *
 * @param {array <string>} tiposDeCarta ejemplo: ["C", "D", "H", "S"];
 * @param {array <string>} tiposEspeciales ejemplo:  ["A", "J", "Q", "K"]
 * @returns {array} regresa un nuevo array de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("Tipo de carta es obligatorio");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("Tipo de carta especial es obligatorio");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};

// export default crearDeck;
