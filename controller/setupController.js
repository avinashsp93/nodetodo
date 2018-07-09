var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        
        //seed database
        var starterTodos = [
            {
                username: 'avinash.sorab',
                todo: 'Go Jogging',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'ashutosh.sorab',
                todo: 'Buy Paddle',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'meena.shet',
                todo: 'Bring Milk',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'prabhakar.sorab',
                todo: 'Listen to Songs',
                isDone: true,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            if(err) throw err;
            res.send(results);
        });

    });
}