
function consultaEndereco() {
    let cep = document.querySelector('#cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(cep.length !== 8 || cep == 0){
        alert('Cep inválido')
        return
    }

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarDados(data)
        })
    })
}

function mostrarDados(dados){
    let res = document.querySelector('#res')
    
    res.innerHTML = `<p>${dados.logradouro},
    ${dados.localidade} - ${dados.uf}</p>`
}

=======
function consultaEndereco() {
    let cep = document.querySelector('#cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(cep.length !== 8 || cep == 0){
        alert('Cep inválido')
        return
    }

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarDados(data)
        })
    })
}

function mostrarDados(dados){
    let res = document.querySelector('#res')
    
    res.innerHTML = `<p>${dados.logradouro},
    ${dados.localidade} - ${dados.uf}</p>`
}

>>>>>>> dd734b1 (consumo de api)
document.querySelector('#btn').addEventListener('click', consultaEndereco)
