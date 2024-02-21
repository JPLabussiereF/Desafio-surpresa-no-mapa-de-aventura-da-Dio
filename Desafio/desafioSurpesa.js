
let pokemons = [["Poochyena", "M", 2, "possui 13 de HP!"],
                ["Zigzagoon", "F", 2, "possui 13 de HP!"],
                ["Dragonite", "M", 5, "possui 25 de HP!"],
                ["Dragonite", "F", 5, "possui 24 de HP!"],
                ["Dragonite", "F", 5, "possui 24 de HP!"],
                ["Poochyena", "F", 3, "possui 15 de HP!"],
                ["Wurmple", "M", 2, "possui 14 de HP. Mas, está apenas com 7 de HP!"]];

        for(let i = 0; i < pokemons.length; i++ ){ // Lembrete: length é uma propriedade de arrays que retorna o número de elementos na matriz
            let pokemon = pokemons[i];
            let message = "O pokemon " + pokemon[0] + " (" + pokemon[1] + ") " + "foi cadastrado com sucesso!"
            console.log(message);
        }

        console.log(" ")
        console.log("Abaixo fornecemos mais informações sobre os pokemons adiquiridos: ")

        for (let i = 0; i < pokemons.length; i++) { // Lembrete: length é uma propriedade de arrays que retorna o número de elementos na matriz
            let pokemon = pokemons[i];      // Lembrete²: i++ é um operador de incremento
            let message = "O pokemon " + pokemon[0] + " (" + pokemon[1] + "), de nível " + pokemon[2] + " " + pokemon[3];
            console.log(message);
        }

    