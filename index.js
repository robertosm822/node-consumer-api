const EventEmitter = require('events');
class MeuEmissor extends EventEmitter{

} 
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';
meuEmissor.on(nomeEvento, function(click){
    console.log('Um usuario clicou', click);
});

/*
meuEmissor.emit(nomeEvento, 'barra de rolagem');
meuEmissor.emit(nomeEvento, 'no ok');

let count = 0;
setInterval(function(){
    meuEmissor.emit(nomeEvento, 'no ok'+ (count++));
}, 2000);
*/

//resultado que simula a espera por uma ação de digitar qualquer coisa no teclado e exibir
const stdin = process.openStdin();
/*
stdin.addListener('data', function(value){
    console.log(`Você digitou: ${value.toString().trim()}`);
});
*/

//exemplo com Promise, onde se executa apenas uma única vez.  Resolve e encerra:
function main(){
    return new Promise(function(resolve, reject){
        stdin.addListener('data', function(value){
            console.log(`Você digitou: ${value.toString().trim()}`);
        });
    });
}

main().then(function(resultado){
    console.log('resultado', resultado);
});