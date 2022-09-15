//multabilidade altera um obj e altera todos 
pessoa = {
    nome: 'juviliane'
}
pessoa2 = pessoa;

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa2.nome='Ju';

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa.nome='joão';

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa3 = {
    nome: 'Jorge'  
}
pessoa3 = pessoa;
console.log(pessoa3.nome);