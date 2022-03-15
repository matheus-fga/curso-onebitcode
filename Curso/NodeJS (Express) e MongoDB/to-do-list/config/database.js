const mongosse = require('mongoose');

mongosse.Promise = global.Promise;

mongosse.connect('mongodb://localhost/to-do-list', { useNewUrlParser: true, useUnifiedTopology:  true })
                .then(() => console.log('Conectado ao MongoDB'))
                .catch((error) => console.log(error));

