1: function calcularIR(salario) {
2:     // Verifica se a entrada é um número válido
3:     if (typeof salario !== 'number' || isNaN(salario)) {
4:         return "Erro: entrada inválida"; // Retorna erro se não for número
5:     }

6:     // Verifica se o salário é negativo
7:     if (salario < 0) {
8:         return "Erro: salário negativo"; // Retorna erro para valores negativos
9:     }

10:    // Faixa isenta de imposto
11:    if (salario <= 2259.20) {
12:        return 0.0; // Sem imposto para salários até R$ 2.259,20
13:    }

14:    // Declaração das variáveis de alíquota e dedução
15:    let aliquota, deducao;

16:    // Faixa de 7,5%
17:    if (salario <= 2826.65) {
18:        aliquota = 0.075;
19:        deducao = 169.44;
20:    } 
21:    // Faixa de 15%
22:    else if (salario <= 3751.05) {
23:        aliquota = 0.15;
24:        deducao = 381.44;
25:    } 
26:    // Faixa de 22,5%
27:    else if (salario <= 4664.68) {
28:        aliquota = 0.225;
29:        deducao = 662.77;
30:    } 
31:    // Faixa de 27,5% (acima de R$ 4.664,68)
32:    else {
33:        aliquota = 0.275;
34:        deducao = 896.00;
35:    }

36:    // Cálculo do imposto com base na fórmula: (salário × alíquota) - dedução
37:    const imposto = (salario * aliquota) - deducao;

38:    // Retorna o valor do imposto arredondado para 2 casas decimais
39:    return Math.round(imposto * 100) / 100;
40: }

