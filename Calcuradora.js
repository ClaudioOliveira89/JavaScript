<Calcuradora.html class="js"></Calcuradora>

<h1>
	<script>

	//soma, subtracao, multiplicacao, divisao, resto, porcentagem
	function calculo(operacao, num1, num2) {
		var resultado;

		if (operacao === "soma") {
		resultado = num1 + num2;
		} else if (operacao === "subtracao") {
		resultado = num1 - num2;
		}else if (operacao === "multiplicacao") {
        resultado = num1 * num2;	
		} else if (operacao === "divisao") {
		resultado = num1 / num2;	
		} else if (operacao === "resto") {
		resultado = num1 % num2;
		} else if (operacao === "porcentagem") {
		resultado = num1 * num2 / 100;
		} else {
			console.log("operação inválida.");
		}

		return resultado;
	}
console.log(calculo("soma", 1, 1));

	</script>
</h1>
