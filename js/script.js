let url = "https://pokeapi.co/api/v2/pokemon/";
// let url2 = "https://pokeapi.co/a/v2/pokemon/";

async function fetchcall() {
    try {
        // Fetch
        for (let i = 0; i < 20; i++) {
            const response = await fetch(url);
            const data = await response.json();
            let pokemon_name = data.results[i].name;
            let pokemon_url = data.results[i].url;
          // document.write(i + " " + data.results[i].name + " ----> " + data.results[i].url + "<br>");
        
        //Fin Fetch 

        try {
            // Axios
                axios.get(pokemon_url).then(function(response2) {
                let response3 = response2.data.sprites.front_default;
                document.write(i + " " + pokemon_name + " ---> " + response2.data.sprites.front_default + "<br>");
               // document.write(i + " " + pokemon_name + " ---> " + response3 + "<br>");
            });
        } catch (error) { console.log("Error Axios : " + error); }
    }

    } catch (error) {console.log("Error Fetch : " + error);}
    

}
fetchcall();