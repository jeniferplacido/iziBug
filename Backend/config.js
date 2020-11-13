let config = {
    ambiente: "dev",
    mongodb: {
        host: 'localhost:27017',
        user: '',
        pass: '',
        db: 'iziBug',
        urlAdd: '?retryWrites=true&w=majority'
    },
    server:{
        porta: 3000
    },
    front:{
        baseUrl: "https://homologacao.ambientemedicamento.com.br",
        forcarHTTPS: true, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
        caminho: "./Front-End/build", //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
    },
    back:{
        // baseUrl: "https://homologacao.ambientemedicamento.com.br/API"
        baseUrl: "http://localhost:3000/API"
    }
    /* email:{
       smtp:{
           host: "smtp.umbler.com",
           port: "587",
           secure: false,
           user: "contato@ambientemedicamento.com.br",
           pass: "nPw#E8Ayw3LgtwQ"
       }
    } */
}

module.exports = config;