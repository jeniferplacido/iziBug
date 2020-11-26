let config = {
    ambiente: "dev",
    mongodb: {
        host: 'cluster0.oib74.mongodb.net',
        user: 'iziBug',
        pass: 'amizade123',
        db: 'iziBug',
        urlAdd: '?retryWrites=true&w=majority'
    },
    server:{
        porta: 5000
    },
}

module.exports = config;