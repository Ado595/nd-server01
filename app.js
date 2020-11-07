const express = require('express')
const app = express();
const hbs = require('hbs');
//HELPERS
require('./hbs/helpers');

//SERVICIO WEB
// app.get('/', (req, res) => {
//   let salida = {
//     nombre:'Jonh',
//     edad:30,
//     url:res.url
//     }

//   res.send(salida);
// })

//PAGINA WEB
app.use(express.static(__dirname + '/public'));

//HBS EXPRESS ENGINE
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//RENDERIZAR HBS

app.get('/', (req, res) => {

  res.render('home',{
    name:'jonh doe'
  });
});

app.get('/about', (req, res) => {

  res.render('about.hbs');
})

app.listen(3000,()=>{
  console.log('Escuchando puerto 3000')  
})