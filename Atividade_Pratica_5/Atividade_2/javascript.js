
function calcularIdade() {
    var opcao;
	var idade = document.getElementById("meu-input").value;
	
	
	
	idade = parseInt(idade);
	
	if(idade > 0 && idade < 15 )
	{
		opcao = 1;
	}
	
	else if(idade >= 15 && idade < 30)
	{
		opcao = 2;
	}
	else if(idade >= 30 && idade < 60)
	{
		opcao = 3;
	}
	if(idade >= 60)
	{
		opcao = 3;
	}
	
	
	opcao = parseInt(opcao);
	
	switch (opcao)
	{
		case 1:
			document.getElementById("valor").value = "Crianca";
		break;
		
		case 2:
			document.getElementById("valor").value = "Jovem";
		break;
		
		case 3:
			document.getElementById("valor").value = "Adulto";
		break;
		
		case 4:
			document.getElementById("valor").value = "Idoso";
		break;
		
		default:
			document.getElementById("valor").value = "ERRO";
		
			
			
	}
	
	

}

// Evento que é executado toda vez que uma tecla for pressionada no input
document.getElementById("meu-input").onkeypress = function(e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        calcularIdade()
        e.preventDefault();
    }
}

// Evento que é executado ao clicar no botão de enviar
document.getElementById("meu-submit").onclick = function(e) {
    calcularIdade()
    e.preventDefault();
}









