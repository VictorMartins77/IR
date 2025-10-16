1: function calcularIR(salario) {
2:     if (typeof salario !== 'number' || isNaN(salario)) {
3:         return "Erro: entrada inválida";
4:     }

5:     if (salario < 0) {
6:         return "Erro: salário negativo";
7:     }

8:     if (salario <= 2259.20) {
9:         return 0.0;
10:    }

11:    let aliquota, deducao;

12:    if (salario <= 2826.65) {
13:        aliquota = 0.075;
14:        deducao = 169.44;
15:    } else if (salario <= 3751.05) {
16:        aliquota = 0.15;
17:        deducao = 381.44;
18:    } else if (salario <= 4664.68) {
19:        aliquota = 0.225;
20:        deducao = 662.77;
21:    } else {
22:        aliquota = 0.275;
23:        deducao = 896.00;
24:    }

25:    const imposto = (salario * aliquota) - deducao;
26:    return Math.round(imposto * 100) / 100;
27: }
