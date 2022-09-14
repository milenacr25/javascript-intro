/*Faça uma estrutura if/else para verificar se um usuário pode dirigir;
Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH
Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem;
Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
Se não tiver 18 nem CNH, exiba outra mensagem;*/

idade = 18;
//idade = 17;

cnh = "S";
//cnh = "N";

if(idade >= 18 && cnh == "S") {
    console.log('Você pode dirigir!');
}else if((idade >= 18) && (cnh == "N")){
    console.log('Você tem idade para dirigir porém não tem CNH para dirigir.');
}else{
    console.log('Você não possui idade e não possui CNH para dirigir');
}



