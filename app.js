const express = require('express');

const app = express();

const mainRoutes = require('./routes/mainRoutes');

const methodOverride = require('method-override');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('./public'));
app.use(methodOverride ('_method'));
app.use('/',mainRoutes);

app.use((req, res, next) => {
    res.status(404).render('not-found')
})

app.set('view engine', 'ejs');





app.listen(3000, ()=> {
    console.log('servidor corriendo puerto 3000');
})