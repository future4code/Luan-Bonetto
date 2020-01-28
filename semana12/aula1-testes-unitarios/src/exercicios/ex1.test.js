import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
  
  it("Testa se é multiplo de 400", () => {

    const input = 2000
    const result =  anoBissexto(input);

    expect(result).toBe(true)
  });

  // it("Testa se é bissexto exceto se for múltiplo de 100 mas não de 400", () =>{
    
  //   const input = 1996
  //   const result = anoBissexto(input)

  //   expect(result).toBe(true)
  // })

});
