const calcularIR = require('./ir');

describe("Testes de Unidade - Cálculo do IRPF 2025", () => {

  // Caminho 1: Entrada inválida
  test("Deve retornar erro para entrada não numérica", () => {
    expect(calcularIR("abc")).toBe("Erro: entrada inválida");
    expect(calcularIR(null)).toBe("Erro: entrada inválida");
  });

  // Caminho 2: Salário negativo
  test("Deve retornar erro para salário negativo", () => {
    expect(calcularIR(-1000)).toBe("Erro: salário negativo");
  });

  // Caminho 3: Faixa isenta
  test("Deve retornar 0 para salário até 2259.20", () => {
    expect(calcularIR(0)).toBe(0.0);
    expect(calcularIR(2000)).toBe(0.0);
    expect(calcularIR(2259.20)).toBe(0.0);
  });

  // Caminho 4: Faixa 7,5%
  test("Deve calcular corretamente para faixa de 7,5%", () => {
    // Exemplo: salário = 2500
    // imposto = (2500 * 0.075) - 169.44 = 18.06
    expect(calcularIR(2500)).toBe(18.06);
  });

  // Caminho 5: Faixa 15%
  test("Deve calcular corretamente para faixa de 15%", () => {
    // Exemplo: salário = 3000
    // imposto = (3000 * 0.15) - 381.44 = 68.56
    expect(calcularIR(3000)).toBe(68.56);
  });

  // Caminho 6: Faixa 22,5%
  test("Deve calcular corretamente para faixa de 22,5%", () => {
    // Exemplo: salário = 4000
    // imposto = (4000 * 0.225) - 662.77 = 237.23
    expect(calcularIR(4000)).toBe(237.23);
  });

  // Caminho 7: Faixa 27,5%
  test("Deve calcular corretamente para faixa de 27,5%", () => {
    // Exemplo: salário = 5000
    // imposto = (5000 * 0.275) - 896.00 = 479.00
    expect(calcularIR(5000)).toBe(479.00);
  });

});
