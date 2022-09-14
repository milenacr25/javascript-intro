/*Cria uma estrutura de controle com if que verificará a entrada em uma festa, se
tiver mais de 18 anos pode entrar;
Armazene a idade em uma variável;
Insira uma instrução mensagem (“Pode entrar”), caso a pessoa tenha mais que 18
anos;*/

idade = prompt ("Digite a sua idade: ");

if(idade >= 18){
    alert('Pode entrar');
}else{
    alert('Você é menor de idade, entrada negada.');
}
