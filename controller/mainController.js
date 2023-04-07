
const mainController = {
    
    index:(req,res) =>{
        return res.render('index');
    },
    
    register:(req,res) =>{
        return res.render('register');
    },
    login:(req,res) =>{
        return res.send('Login');
    },
    list: (req,res) =>{
        let users = [
            {id:1, name:'Juan'},
            {id:2, name:'Lucy'},
            {id:3, name:'Cata'},
            {id:4, name:'Agus'},
            {id:5, name:'Rufus'}
        ]
               
        res.render('userList', {'users':users})
    },
    search: (req,res) =>{
        let loQueUsuarioBusco = req.query.search;
        console.log(loQueUsuarioBusco)

        let users = [
            {id:1, name:'Melchor'},
            {id:2, name:'Gaspar'},
            {id:3, name:'Baltazar'},
            {id:4, name:'Papa Noel'}
            
        ]
        
        let usersResults = [];
        
        for (let i = 0; i<users.length; i++){
            if(users[i].name.includes(loQueUsuarioBusco) ){
                usersResults.push(users[i]);
            }
        }
        
        res.render('userResults',{usersResults:usersResults})
        
       
    },
    create: (req,res) => {
        let usuario = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            email: req.body.email
        }
        res.send(usuario)
        res.redirect('list')
        },
    edit: (req,res) =>{
            let idUser = req.params.idUser;

            let users = [
                {id:1, name:'Melchor'},
                {id:2, name:'Gaspar'},
                {id:3, name:'Baltazar'},
                {id:4, name:'Papa Noel'}
            ];
            let userToEdit = users[idUser];
    
            res.render("userEdit",{userToEdit : userToEdit});
        }
    }

module.exports = mainController; 