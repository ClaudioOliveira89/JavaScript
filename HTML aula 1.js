<html>
<script>
// se listarmos todos os números naturais menores
//que 10 e que são múltiplos de 3 ou 5, obtemos
//3, 5, 6 e 9. A soma desses múltiplos é 23.
//Encontre a somma de todos os múltiplos de 3 ou 5
//abaixo de 1000.

//Resposta correta: 233168

//1- criar uma função que verifica se um número é divisivel por 3 ou 5

//10 9 8 7 6 5 4 3
//999 998 997 996 ... 5 4 3

function verificaDivisivel3ou5(numero) {
//true -> o número é divisivel por 3 ou 5
//false -> o número não é divisível por 3 ou 5
if (numero % 3 === 0 || numero % 5 === 0) {

    return true;
} else {
    return false;
}
}

function somaMultiplos3ou5() {
var soma = 0;

    //3 4 5 6 7 8 9 10 11 ... 997 998 999
//inicializacao, teste, icremento
for (var i = 3; i <= 999; i++) {
    if (verificaDivisivel3ou5(i)) {
        //soma = soma + i;
        soma += i;
    }
    return soma;
} /
}
var i = 3;
while (i <= 999) {
    if (verificaDivisivel3ou5(i)) {
        soma += i;
        lista.push(i);
    }
    i++;
}

//console.log(lista);
for (var i = 0; i < lista.length; i++) {
    console.log(lista[i])
}
</script>

</html>
