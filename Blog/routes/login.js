module.exports = (login, knex, jwt, s_key) => {
    login.post('/', (req, res) => {
        knex.select('*')
        .from('users')
        .where('email', req.body.email)
        .then((data) => {
            if (data.length == 0) {
                res.send("gmail wrong")
            }else{
               if ( data[0].password == req.body.password){
                    user_id = (data[0]['user_id']);
                    jwt.sign({ "user_id" : user_id }, s_key, (err, run) => {
                        if (!err){
                            res.cookie(run)
                            res.send("logged in")
                        }else{
                            res.send(err)
                        }    
                    })
               }else{
                   res.send("wrong password")
               }
            }
        }).catch((err)=>{
            res.send(err)
        })
    })
}


