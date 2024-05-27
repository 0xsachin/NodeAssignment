const myPluginTwo = {
    name: 'myPluginTwo',
    version: '1.0.0',
    
    //register method accepts two parameters, server and options
    //register should be an async function that returns once your plugin has completed whatever steps are necessary for it to be //registered. Alternatively your register plugin should throw an error if an error occurred while registering your plugin.

    register: async function (server, options) {
    
        // Create a route for example
        //Once this plugin is registered, the server will display 'hello, world' when the user goes to route /test.
        server.route({
            method: 'GET',
            path: '/pluginTwo',
            handler: (request, h) => {
                return 'hello, world myPluginOne';
            }
        });

        server.ext('onRequest', (request, h) => {
            console.log('Plugin onRequest extension');
            return h.continue;
        });
    }
};

module.exports = myPluginTwo;
