const Hapi = require('hapi')

const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
})

server.route({
    method: 'POST',
    path:'/client/count-all',
    handler: function (request, h) {
        return h.response({
            "result": "Success",
            "message": "Done.",
            "context": {
                "limit": 1000,
                "count": 6
            }
        })
    }
})

server.route({
    method: 'POST',
    path:'/client/count',
    handler: function (request, h) {
        let count = 0
        let limit = 1
        if (request.payload.email === 'multiple@email.cz') {
            count = 1
            limit = 2
        }
        if (request.payload.email === 'multiplefull@email.cz') {
            count = 2
            limit = 2
        }
        return h.response({
            "result": "Success",
            "message": "Done.",
            "context": {
                "email": request.payload.email,
                "count": count,
                "emailLimit": limit
            }
        })
    }
})

server.route({
    method: 'POST',
    path:'/client/create',
    handler: function (request, h) {
        return h.response({
            "result": "Success",
            "message": "Created.",
            "context": {
                "limit": 1000,
                "count": 6,
                "id": "315e5ba0-d6cc-11e8-a252-fdd6fb1ab92c"
            }
        })
    }
})

server.route({
    method: 'POST',
    path:'/client/send-watcher-list',
    handler: function (request, h) {
        return h.response({
            "message": "Sent.",
            "result": "Success"
        })
    }
})

server.route({
    method: 'POST',
    path:'/client/delete',
    handler: function (request, h) {
        return h.response({
            "message": "Deleted.",
            "result": "Success"
        })
    }
})

server.route({
    method: 'POST',
    path:'/client/destination-name',
    handler: function (request, h) {
        let code = 'LON'
        let name = 'Londýn'
        console.log('michal', request.payload)
        if (request.payload.lang === 'en' && request.payload.locationCode === 'LON') {
            name = 'London'
        }
        if (request.payload.lang === 'cs' && request.payload.locationCode === 'PRG') {
            code = 'PRG'
            name = 'Praha - Letište Václava Havla'
        }
        if (request.payload.lang === 'en' && request.payload.locationCode === 'PRG') {
            code = 'PRG'
            name = 'Prague - Ruzyne'
        }
        return h.response({
            "context": [{"code": code,"name": name}],
            "message":"Found.",
            "result":"Success"
        })
    }
})

const start = async function() {
    try {
        console.log('Starting HAPI server...')
        await server.register({
            plugin: require('hapi-cors'),
            options: {
                origins: ['http://localhost:8080']
            }
        })

        await server.start();
        console.log('Server starter.')
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
};

start();

