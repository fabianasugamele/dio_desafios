/*
Desafio
A corrida de tartarugas é um esporte que cresceu muito nos últimos anos, fazendo com que vários competidores se dediquem a capturar tartarugas rápidas, e treina-las para faturar milhões em corridas pelo mundo. Porém a tarefa de capturar tartarugas não é uma tarefa muito fácil, pois quase todos esses répteis são bem lentos. Cada tartaruga é classificada em um nível dependendo de sua velocidade:


Nível 1: Se a velocidade é menor que 10 cm/h .
Nível 2: Se a velocidade é maior ou igual a 10 cm/h e menor que 20 cm/h .
Nível 3: Se a velocidade é maior ou igual a 20 cm/h .

Sua tarefa é identificar qual o nível de velocidade da tartaruga mais veloz de um grupo.

Entrada
A entrada consiste de múltiplos casos de teste, e cada um consiste em duas linhas: A primeira linha contém um inteiro L (1 ≤ L ≤ 500) representando o número de tartarugas do grupo, e a segunda linha contém L inteiros Vi (1 ≤ Vi ≤ 50) representando as velocidades de cada tartaruga do grupo.

Saída
Para cada caso de teste, imprima uma única linha indicando o nível de velocidade da tartaruga mais veloz do grupo.

 
Exemplo de Entrada	               Exemplo de Saída
10                                 3                     
10 10 10 10 15 18 20 15 11 10      1
10                                 2
1 5 2 9 5 5 8 4 4 3
10
19 9 1 4 5 8 6 11 9 7
*/


while (true) {
    let quantidadeDeTartarugas = parseInt(gets())
    if (isNaN(quantidadeDeTartarugas)) {
        break;
    }
    let velocidadesTartarugas = gets().split(" ");
    let tartarugaMaisRapida = 0;

    for (let i = 0; i < quantidadeDeTartarugas; i++) {
        if (parseInt(velocidadesTartarugas[i]) > tartarugaMaisRapida) {
            tartarugaMaisRapida = parseInt(velocidadesTartarugas[i]);
        }
    }

    if (tartarugaMaisRapida < 10) {
        nivel = 1;
    } else if (tartarugaMaisRapida >= 10 && tartarugaMaisRapida < 20) {
        nivel = 2;
    } else {
        nivel = 3;
    }

    console.log(nivel);
}