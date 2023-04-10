function carregaVotoApp() {
    var biografias = {
        voto01: {
            nome:
                "📱Idol Champ - Fan Choice of the Year",
            imagem:
                "https://play-lh.googleusercontent.com/gyv_sTnyMfz1ixqetwdCPOVskZpgPozNKwAhebJm2Oxl0bi4IVLhe3WUn16RE0doU1HB",
            descricao:
                "Essa votação vai até: 🗓️30/04",
            linkVoto:
                "http://bit.ly/40xUzvg"
        },

        voto02: {
            nome:
                "📱Idol Champ - World Trend Artist",
            imagem:
                "https://play-lh.googleusercontent.com/gyv_sTnyMfz1ixqetwdCPOVskZpgPozNKwAhebJm2Oxl0bi4IVLhe3WUn16RE0doU1HB",
            descricao:
                "Essa votação vai até: 🗓️30/04",
            linkVoto:
                "http://bit.ly/40X2ouo"
        },

        voto03: {
            nome:
                "📱FANCAST",
            imagem:
                "https://play-lh.googleusercontent.com/Uv22GMCiP5aD1N55BQB8i8rKTAbCrCK0ZciahB3tEKI6L9TZW-qE0EZ349VJt0OaNA=s256-rw",
            descricao:
                "Essa votação vai até: 🗓️30/04",
            linkVoto:
                "https://fancast.page.link/Vm7t"
        },

    };

    var content = document.getElementById("contentApp")
    
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

        '">📲Baixe o App aqui e vote, Army💜</a>' +

        "</details></div>";
        }
}

carregaVotoApp();