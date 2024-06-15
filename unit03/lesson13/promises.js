let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resposta = {}

        if(true) {
            resposta = {
                codigo: 404,
                erro: 'Objeto não encontrado'
            }

            reject(resposta)
        }

        resposta = {
            1: { id: 1, nome: 'Caio'},
            2: { id: 1, nome: 'Leonan'},
            3: { id: 1, nome: 'Rogério'}
        }

        resolve(resposta)

    }, 4000)
}).then(() => {
    let promessa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let resposta = {}

        if(false) {
            resposta = {
                codigo: 1000,
                erro: 'Assistir One Piece'
            }

            reject(resposta)
        }

        resposta = {
            1: { id: 1, nome: 'Vanessa'},
            2: { id: 2, nome: 'Fernanda'},
            3: { id: 3, nome: 'Guilherme'}
        }

        resolve(resposta)
        }, 4000)
    }).then((dados) => {
        console.log(dados)
    }).catch(erro => {
        console.log(erro)
    })
}).then(() => {
    console.log("then 2")
    return 'then 3'
}).then(param => {
    console.log(param)
})