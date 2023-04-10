function carregaVotoNav() {
    var biografias = {
        voto01: {
            nome:
                "🏆M COUNTDOWN",
            imagem:
                "data:image/jpeg;base64,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EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z",
            descricao:
                "Essa votação vai até: 🗓️10/04",
            linkVoto:
                "http://bit.ly/41ewauN"
        },

        voto02: {
            nome:
                "🏆SHOW CHAMPION",
            imagem:
                "https://pbs.twimg.com/media/EmF1pmcWkAAj73m.png",
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

        '<a target="_blank" href="' +
        
        biografias[bio].linkVoto +

        '">🗳️Vote aqui, Army💜</a>' +

        "</details></div>";
        }
}

carregaVotoNav();