const { factory } = require('factory-girl');
const { Company } = require('../app/models');

factory.define('Company', Company, {
    code: ['ITUB4', 'WEGE3', 'LREN3', 'PSSA3', 'EGIE3'][Math.floor((Math.random()*5))]
});

module.exports = factory;