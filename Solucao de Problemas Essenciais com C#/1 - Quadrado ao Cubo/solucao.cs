/*Desafio
Desafio
Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

Entrada
O arquivo de entrada contém um número inteiro positivo N.

Saída
Imprima a saída conforme o exemplo fornecido.

 
Exemplo de Entrada	    Exemplo de Saída
5                       1 1 1
                        2 4 8
                        3 9 27
                        4 16 64
                        5 25 125
*/

using System;

class Desafio {
    static void Main() {
        int valor = Int32.Parse(Console.ReadLine());
        int i;
        int j;
        string output = "";
        
        for (i = 1; i <= valor; i++){
          for (j = 1; j <= 3; j++){
            output += " " +  Math.Pow(i,j);
          }
          output += "\n";
        }
        
        Console.WriteLine(output);
    }
}