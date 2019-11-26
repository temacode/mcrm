module.exports = (app, mongoose) => {
    var userSchema = new mongoose.Schema({
        name: {
            firstName: {
                type: String,
                required: true
            },
            lastName: String
        },
        userpic: String,
        age: Number
    });
    
    var User = mongoose.model('User', userSchema);
    app.get('/api/users', (req, res) => {
        User.find().exec((err, users) => {
            if (err) {
                console.log(err);
            }
            res.status(201).send(users);
        });
    });
}