/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

/*let listaCompras = []

listaCompras[0] = prompt('Digite seus itens aqui!: ')

listaCompras[1] = prompt('Digite seus itens aqui!: ')

listaCompras[2] = prompt('Digite seus itens aqui!: ')

if(listaCompras[2] === 'Leite'){
    alert('Imprimindo lista...')
    console.log(listaCompras);
}else{
     listaCompras[3] = ('Leite')
     console.log(listaCompras);
}
console.log(listaCompras);*/

let listaCompras = []

listaCompras.push(prompt)('Digite seus itens aqui!: ');

listaCompras.push(prompt)('Digite seus itens aqui!: ');

listaCompras.push(prompt)('Digite seus itens aqui!: ');

if(listaCompras[listaCompras.length - 1] !== "leite"){
    listaCompras.push("leite")
}

console.log(listaCompras);