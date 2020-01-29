import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {


  it("Detecta se palavra/frase informada é um palíndromo", () => {

    const input = "Socorram-me subi no onibus em marrocos"
    const result = checaPalindromo(input);

    expect(result).toBe(true)
  });


});
