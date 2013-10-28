module.exports = function ( app ) {
    // test routes

    app.get('/ua', function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain' } );
        res.write('*** start');
        //res.write(req.useragent);
        res.write('*** end');
    });

    app.get('/x', function(req, res) {
        var useTemplate = 'default';
        if(req.useragent.isMobile)
            useTemplate = 'mobile/' + useTemplate;

        res.render(useTemplate, {
            message : 'The Test'
        });
    });

}
