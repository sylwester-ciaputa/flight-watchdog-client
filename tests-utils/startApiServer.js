const Hapi = require('@hapi/hapi')

const server = new Hapi.Server({
    host: '127.0.0.1',
    port: 3000,
    routes: {
        cors: true,
    },
})

let tokenLimitCount = false

server.route({
    method: 'POST',
    path: '/count-all',
    handler: function (request, h) {
        const headers = request.headers

        let limit = 1000
        let count = 6

        if (headers.authorization === 'Basic OnRva2VuTGltaXQ=') {
            limit = 1
            count = tokenLimitCount ? 1 : 0
            tokenLimitCount = !tokenLimitCount
        }

        if (headers.authorization === 'Basic OnRva2VuTGltaXRaZXJv') {
            limit = 1
            count = 1
        }

        return h.response({
            result: 'Success',
            message: 'Done.',
            context: {
                limit: limit,
                count: count,
            },
        })
    },
})

server.route({
    method: 'POST',
    path: '/count',
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
            result: 'Success',
            message: 'Done.',
            context: {
                email: request.payload.email,
                count: count,
                emailLimit: limit,
            },
        })
    },
})

server.route({
    method: 'POST',
    path: '/create',
    handler: function (request, h) {
        return h.response({
            result: 'Success',
            message: 'Created.',
            context: {
                limit: 1000,
                count: 6,
                id: '315e5ba0-d6cc-11e8-a252-fdd6fb1ab92c',
            },
        })
    },
})

server.route({
    method: 'POST',
    path: '/send-watcher-list',
    handler: function (request, h) {
        return h.response({
            message: 'Sent.',
            result: 'Success',
        })
    },
})

server.route({
    method: 'POST',
    path: '/delete',
    handler: function (request, h) {
        return h.response({
            message: 'Deleted.',
            result: 'Success',
        })
    },
})

server.route({
    method: 'POST',
    path: '/destination-name',
    handler: function (request, h) {
        let code = 'LON'
        let name = 'London'
        if (request.payload.locationCode === 'PRG') {
            code = 'PRG'
            name = 'Prague - Ruzyne'
        }
        if (request.payload.locationCode === 'PRG+') {
            code = 'PRG'
            name = 'Prague'
        }
        if (request.payload.lang === 'cs' && request.payload.locationCode === 'LON') {
            name = 'Londýn'
        }
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
        if (request.payload.lang === 'cs' && request.payload.locationCode === 'PRG+') {
            code = 'PRG+'
            name = 'Praha'
        }
        if (request.payload.lang === 'en' && request.payload.locationCode === 'PRG+') {
            code = 'PRG+'
            name = 'Prague'
        }
        return h.response({
            context: [{ code: code, name: name }],
            message: 'Found.',
            result: 'Success',
        })
    },
})

const start = async function () {
    try {
        console.log('Starting HAPI server...')
        await server.start()
        console.log('Server started.')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()
