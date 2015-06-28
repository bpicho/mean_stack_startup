module.exports = {
    // Konfiguracja połączenia z MongoDB
    mongodb : 'mongodb://localhost:27017/mean_startup',

    // Konfiguracja autoladera
    autoload : {
        dir : './controllers',
        recursive : true
    }
};