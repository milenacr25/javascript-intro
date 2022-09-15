carro = {
    portas : 2,
    portamalas: '200L',
    motor: '1.0 turbo'
}

adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);
Object.assign(carro, adicionais);
console.log(carro);

//concatena as informações