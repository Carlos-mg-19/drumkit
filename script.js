let filhos = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hihat.wav',
    'F' : 'kick.wav',
    'G' : 'openhat.wav',
    'H' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav'
    
}

let criardiv = (texto) => {
    let div = document.createElement('div')
    div.classList. add ('key')
    div.textContent = texto
    div.id = texto
    document.getElementById('container').appendChild(div)
}

let exibir = (filhos) => Object.keys (filhos) . forEach (criardiv);
exibir(filhos)

let tocarsom = (letra) => {
    let audio = new Audio(`./sons/${filhos[letra]}`)
    audio.play();
}
let adicionarefeito = (letra) => document.getElementById(letra)
                                         .classList.toggle ('active');

let removerEfeito = (letra) => {
    const efeito = document.getElementById(letra)
    let removeractive = () => efeito.classList.remove('active')
    efeito.addEventListener('transitionstart', removeractive);
}

let ativardiv = (evento) => {
    let letra = evento.type == ('click') ? evento.target.id : evento.key.toUpperCase();
    let letrapermitida = filhos.hasOwnProperty(letra)
    

    if (letrapermitida){
        adicionarefeito(letra)
        tocarsom(letra);
        removerEfeito(letra)
    }

}

document.getElementById('container')
        addEventListener('click', ativardiv)

window.addEventListener('keyup',ativardiv)    