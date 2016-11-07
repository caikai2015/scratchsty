(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {

        console.log(' -- Waiting for  --- ---  --- seconds--');
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
        // Code that gets executed when the block is run
        console.log('Waiting for  --- ---  --- seconds');
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'my first block', 'my_first_block'],
        ]
    };
    console.log(' -- tet --');
    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});