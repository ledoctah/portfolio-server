const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false
});

server.get('/', function(req, res) {
    const about = {
        avatar_url: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/p960x960/78137805_2249289121844149_2610958843131199488_o.jpg?_nc_cat=105&_nc_ohc=ypx3B8OZULYAX9l5LJh&_nc_ht=scontent-gru2-2.xx&_nc_tp=6&oh=7e2db25c457d686473096526861aca1b&oe=5ECB00E3",
        name: "Matheus Ferreira",
        role: "Desenvolvedor - Aquanima",
        description: 'Desenvolvedor full-stack Java e banco de dados SQL, colaborador da <a href="https://www.aquanima.com/en/" target="_blank">Aquanima Brasil</a>',
        links: [
            {name: "Github", url: "https://github.com/ledoctah"},
            {name: "Twitter", url: "https://twitter.com/ledoctah"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/ferreira-matheus/"}
        ]
    }
    return res.render('about', { about  });
});

server.get('/portfolio', function(req, res){
    return res.render('portfolio', { items: videos });
}),

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log('Server is running');
});