function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        console.log(i);
        setTimeout(function() {
            
        }, )
    })
}

const titulo = document.querySelector('h1');
typeWriter(titulo);
