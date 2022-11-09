let url = "https://pokeapi.co/api/v2/pokemon/";

async function fetchcall() {
    try {
        // Fetch
        for (let i = 0; i < 20; i++) {
            const response = await fetch(url);
            const data = await response.json();
            let pokemon_name = data.results[i].name;
            let pokemon_url = data.results[i].url;
            //Fin Fetch 

            try {
                // Axios
                axios.get(pokemon_url).then(async (res) => {
                   let pokemons = [];
                    await axios.all(data.results.map((pokemon) => {
                        return axios.get(pokemon.url).then((res) => {
                            pokemons.push(res.data);
                        })
                    }))
                    const pokename = pokemons.map(function (pok) {
                          return "<img src=" + pok.sprites.front_default + ">"+ pok.name;
                    });
                    document.getElementById("pokename0").innerHTML = pokename[0];
                    document.getElementById("pokename1").innerHTML = pokename[1];
                    document.getElementById("pokename2").innerHTML = pokename[2];
                    document.getElementById("pokename3").innerHTML = pokename[3];
                    document.getElementById("pokename4").innerHTML = pokename[4];
                    document.getElementById("pokename5").innerHTML = pokename[5];
                    document.getElementById("pokename6").innerHTML = pokename[6];
                    document.getElementById("pokename7").innerHTML = pokename[7];
                    document.getElementById("pokename8").innerHTML = pokename[8];
                    document.getElementById("pokename9").innerHTML = pokename[9];
                    document.getElementById("pokename10").innerHTML = pokename[10];
                    document.getElementById("pokename11").innerHTML = pokename[11];
                    document.getElementById("pokename12").innerHTML = pokename[12];
                    document.getElementById("pokename13").innerHTML = pokename[13];
                    document.getElementById("pokename14").innerHTML = pokename[14];
                    document.getElementById("pokename15").innerHTML = pokename[15];
                    document.getElementById("pokename16").innerHTML = pokename[16];
                    document.getElementById("pokename17").innerHTML = pokename[17];
                    document.getElementById("pokename18").innerHTML = pokename[18];
                    document.getElementById("pokename19").innerHTML = pokename[19];                  
                    });
            } catch (error) { 
                console.log("Error Axios : " + error); 
            }
        }

    } catch (error) { console.log("Error Fetch : " + error); }


}
fetchcall();

