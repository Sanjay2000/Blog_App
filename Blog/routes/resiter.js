module.exports = (register, knex, ) => {
    register.post('/registration', (req, res) => {
        knex("users")
            .insert({
                email: req.body.email,
                password: req.body.password
            })
            
            .then(() => {
                console.log("data fechted...");
                res.send("Reqistration Done!")

            })
            .catch((err) => {
                console.log(err);
                res.send(err);

            })
    })


 



}