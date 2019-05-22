
var a = 10;
var b = 40;
var c = "Maria";
var d = 105.50;
var e = true;
var f = null;

document.write(' variavel a = '+ a + '</br> ' );
document.write(' variavel b = '+ b + '</br>  ' );
document.write(' variavel c = '+ c + '</br>  ' );
document.write(' variavel d = '+ d + '</br>  ' );
document.write(' variavel e = '+ e + '</br>  ' );
document.write(' variavel f = '+ f + '</br>  ' );
document.write('<h3> Realiza a trocar </h3>');


f = a
a = b
b = f

document.write(' variavel a = '+ a + '</br> ' );
console.log('variavel a = '+ a + '');
document.write(' variavel b = '+ b + '</br>  ' );
console.log('variavel a = '+ b + '');

f = c
c = d
d = f

document.write(' variavel c = '+ c + '</br> ' );
console.log('variavel c = '+ c + '');
document.write(' variavel d = '+ d + '</br>  ' );
console.log('variavel d = '+ d + '');

f = d 
d = e 
e = f

document.write(' variavel d = '+ d + '</br> ' );
console.log('variavel d = '+ d + '');
document.write(' variavel e = '+ e + '</br>  ' );
console.log('variavel e = '+ e + '');
