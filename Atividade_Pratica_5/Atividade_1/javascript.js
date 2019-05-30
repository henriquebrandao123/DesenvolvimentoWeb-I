 
 var nota1 = prompt("Digite a Primeira Nota: ");
 var nota2 = prompt("Digite a Segunda Nota: ");
 var nota3 = prompt("Digite a Terceira Nota: ");
 var nota4 = prompt("Digite a Quarta Nota: ");
 var media;
 
 nota1 = parseFloat(nota1);
 nota2 = parseFloat(nota2);
 nota3 = parseFloat(nota3);
 nota4 = parseFloat(nota4);
 media = parseFloat(media);
 
 
 
 media = parseFloat((nota1+nota2+nota3+nota4)/4);
 
 if(media>=65)
 {
	 document.write("Aluno Aprovado "+media);	 
 }
 else{
	 document.write("Aluno Reprovado "+media);
 }


















