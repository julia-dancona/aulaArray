/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = []

metasSemana[0] = prompt("Adicione a primeira meta")
metasSemana[1] = prompt("Adicione a segunda meta")
metasSemana[2] = prompt("Adicione a terceira meta")

if(metasSemana[1] !== 'exercicio fisico'){
    metasSemana.splice(1,1,'praticar esportes')
    console.log(metasSemana);
}else{
    alert ('Imprimindo metasSemana...')
}