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
