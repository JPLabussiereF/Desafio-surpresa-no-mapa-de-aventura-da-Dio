// let nomesP = ["Poochyena", "Zigzagoon", "Dragonite", "Dragonite", "Dragonite", "Pochyena", "Wurmple"];

let pokemons = [["Poochyena", "M", 2, "tem 13 pontos de vida!"],
                ["Zigzagoon", "F", 2, "tem 13 pontos de vida!"],
                ["Dragonite", "M", 5, "tem 25 pontos de vida!"],
                ["Dragonite", "F", 5, "tem 24 pontos de vida!"],
                ["Dragonite", "F", 5, "tem 24 pontos de vida!"],
                ["Poochyena", "F", 3, "tem 15 pontos de vida!"],
                ["Wurmple", "M", 2, "tem 14 pontos de vida, mas está apenas com 7 pontos de vida!"]];

        // console.log("O pokemom " + pokemons[0][0] + " é do sexo " + pokemons[0][1] + ", atualmente está level " + pokemons[0][2] + " e " + pokemons[0][3])
    
        
        for (let i = 0; i < pokemons.length; i++) { // length é uma propriedade de arrays que retorna o número de elementos na matriz
            let pokemon = pokemons[i];
            let message = "O pokemon " + pokemon[0] + " (" + pokemon[1] + "), de nível " + pokemon[2] + " " + pokemon[3];
            console.log(message);
        }

    