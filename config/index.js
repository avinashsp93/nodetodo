var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configValues.username}:${configValues.password}@ds229701.mlab.com:29701/avinashsp93-mongodb`;
    }
}