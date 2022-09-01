/*Verifique se o número é primo!
Um número primo, é um número natural, maior que 1 e apenas divisível por si
próprio e por 1;*/

 primo = (n) => {
    for(let i = 2; i < n; i++)
      if (n % i === 0) {
    return console.log(` ${n} Não é um número primo!`);}
     return console.log(` ${n} É um número primo!`);
  };
  (primo(18));

  /*divisao = 0;
  numero = prompt("insira um número");
  for ( x = numero; x > 0; x--) {
    if(numero / x == 0)
    divisao++;
  }
  
}
  if(divisao = 2){
    console.log(' o numero ' + numero + 'é primo')
  }else {
    console.log(' o numero ' + numero + 'não é primo')
  }
    */

