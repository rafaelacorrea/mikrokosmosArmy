function carregaVotoNav() {
    var biografias = {
        voto01: {
            nome:
                "🏆M COUNTDOWN",
            imagem:
                "https://upload.wikimedia.org/wikipedia/en/2/2e/MCountdown2021Logo.png",
            descricao:
                "Essa votação vai até: 🗓️10/04",
            linkVoto:
                "http://bit.ly/41ewauN"
        },

        voto02: {
            nome:
                "🏆SHOW CHAMPION",
            imagem:
                "https://pbs.twimg.com/profile_images/1324444770379452417/niUyvTx9_400x400.jpg",
            descricao:
                "Essa votação vai até: 🗓️10/04",
            linkVoto:
                "http://bit.ly/3UkplFR"
        },

        voto03: {
            nome:
                "🏆TMA",
            imagem:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjcbzE60Q3R0bvpLp0U5DofdEGHiJFJvsXQ&usqp=CAU",
            descricao:
                "Essa votação vai até: 🗓️17/04",
            linkVoto:
                "http://bit.ly/3ZJU6oB"
        },

    };

    var content = document.getElementById("contentNav")
    
    for (var bio in biografias) {

        content.innerHTML +=

        '<div class="card">' +

        '<img src="' +

        biografias[bio].imagem +

        '"/>' +

        "<details>" +

        "<summary>" +

        biografias[bio].nome +

        "</summary>" +

        "<p>" +

        biografias[bio].descricao +

        "</p>" +

        '<a href="' +
        
        biografias[bio].linkVoto +

        '">🗳️Vote aqui, Army💜</a>' +

        "</details></div>";
        }
}

carregaVotoNav();