/*Crie uma variável do tipo const (constante) com o seu nome como valor;
Depois uma estrutura if que verifica se o seu nome é o que está na constante;
Se estiver, emita uma mensagem de saudação com a função alert().*/

const nome = prompt ("Insira o seu nome:");
//const nome = "aaa";

if(nome == "Milena"){
    console.log ("Acesso permitido")
    alert(`Seja bem vinda ${nome}!`);
}else{
    alert('Entrada negada.');
    console.log("Acesso negado")
}
