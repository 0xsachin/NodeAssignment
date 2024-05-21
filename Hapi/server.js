'use strict';

const Hapi = require('@hapi/hapi');
 // const Hapi = require('hapi');

var fs = require("fs")  

// init work asynchronously , function makes the function return a promise
const initHapi = async () => {

    // const server = Hapi.server({
    //     port: 3000,
    //     host: 'localhost'
    // });

    let _config = {
        port: 3000,
        host: 'localhost',

    };


        let tlsParams = {
                key: fs.readFileSync('./server.key'),
                cert: fs.readFileSync('./server.crt'),
                passphrase: 'nciportal',
            };
            _config.tls = tlsParams;

    const server = new Hapi.Server(_config);

    // route created for http://localhost:3000
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    //// route created for http://localhost:3000/sachin
    server.route({
	    method: 'GET',
	    path: '/{name}',
	    handler: (request, h) => {
	        return 'Hello, ' + request.params.name + '!';
	    }
	});

	//// route created for 	
    server.route({
	    method: 'GET',
	    path: '/{name}/{lastName}',
	    handler: (request, h) => {
	        return 'Hello, ' + request.params.name + request.params.lastName + '!';
	    }
	});

    // issue by GET methode payload not getting in request??

    server.route({
        method: 'POST',
        path: '/clientDataNew',
        handler: (request, h) => {
            console.log("request-->",request.payload)
            return 'Hello, Sachin';
        }
    });


	// The await keyword can only be used inside an async function.
	// await keyword makes the function pause the execution and wait for a resolved promise before it continues:
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

// if we get unwanted exception
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

const myPlugin = {
    name: 'myPlugin',
    version: '1.0.0',
    register: async function (server, options) {

        // Create a route for example

        server.route({
            method: 'GET',
            path: '/test',
            handler: function (request, h) {

                return 'hello, world plugin';
            }
        });

        // etc ...
       // await someAsyncMethods();
    }
};



initHapi();
