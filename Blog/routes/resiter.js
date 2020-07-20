module.exports = (register, knex, ) => {
    register.post('/registration', (req, res) => {
        knex("users")
        .select('*').where({"email" :req.body.email})
        .then((data)=>{
            if (data.length !=0){
                res.send('user already exist !')
            }else{
                knex('users')
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

            }
        })
        .catch((err)=>{
            console.log(err);
            res.send(err)
        })
            
    })


 



}
