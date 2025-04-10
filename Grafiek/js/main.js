const labels1 = [
    "playstation 1",
    "playstation 2",
    "playstation 3",
    "playstation 4",
    "playstation 5",
];



const data = {
  labels: labels1,
  datasets:[
    {
      label: "ps consoles bought in an hour",
      data: [1000000, 200000, 500000, 1000000, 500000],
      backgroundColor: ['#FF6B6B','#FFD93D','#6BCB77','#F473B9'],
    }
  ]

};

const config = {
  type: 'doughnut',
  data: data,
  maintainAspectRatio: false,
};



new Chart(document.getElementById("js--chart--1"), config);

function getPokemon(){

let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0,
rock = 0, bug = 0, ghost = 0, steel = 0, fire = 0, water = 0, grass = 0,
electric = 0, psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, 
unknown = 0, shadow = 0;

const labels2 = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 
  'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 
  'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'];

  const counts = {};
labels2.forEach(label => counts[label] = 0);

let completed = 0;

  

  for(i = 0; i < 10; i++){
    
    let random = Math.floor (Math.random() * 500 + 1);
    let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
    .then(response => response.json())
    .then(pokemon => {
      

      
      switch(pokemon.types[0].type.name){
        case 'normal':
          normal = normal + 1;
          break;
        case 'fighting':
          fighting = fighting + 1;
          break;
        case 'flying':
          flying = flying + 1;
          break;
        case 'poison':
          poison = poison + 1;
          break;
        case 'ground':
          ground = ground + 1;
          break;
        case 'rock':
          rock = rock + 1;
          break;
        case 'bug':
          bug = bug + 1;
          break;
        case 'ghost':
          ghost = ghost + 1;
          break;
        case 'steel':
          steel = steel + 1;
          break;
        case 'fire':
          fire = fire + 1;
          break;
        case 'water':
          water = water + 1;
          break;
        case 'grass':
          grass = grass + 1;
          break;
        case 'electric':
          electric = electric + 1;
          break;
        case 'psychic':
          psychic = psychic + 1;
          break;
        case 'ice':
          ice = ice + 1;
          break;
        case 'dragon':
          dragon = dragon + 1;
          break;
        case 'dark':
          dark = dark + 1;
          break;
        case 'fairy':
          fairy = fairy + 1;
          break;
        case 'unknown':
          unknown = unknown + 1;
          break;
        case 'shadow':
          shadow = shadow + 1;
          break;
          
      }

      completed++;
      if (completed === 10) {
        counts.normal = normal;
        counts.fighting = fighting;
        counts.flying = flying;
        counts.poison = poison;
        counts.ground = ground;
        counts.rock = rock;
        counts.bug = bug;
        counts.ghost = ghost;
        counts.steel = steel;
        counts.fire = fire;
        counts.water = water;
        counts.grass = grass;
        counts.electric = electric;
        counts.psychic = psychic;
        counts.ice = ice;
        counts.dragon = dragon;
        counts.dark = dark;
        counts.fairy = fairy;
        counts.unknown = unknown;
        counts.shadow = shadow;

        drawPokemonChart(labels2, counts);
    }
  });
}
}


function drawPokemonChart(labels2, counts) {
  const dataPokemon = {
    labels: labels2,
    datasets: [{
      label: "Pokémon types",
      data: labels2.map(type => counts[type]),
      backgroundColor: labels2.map(() =>
        `hsl(${Math.random() * 360}, 70%, 70%)`
      ),
    }]
  };

  const configPokemon = {
    type: 'bar',
    data: dataPokemon,
  };
  
  new Chart(document.getElementById("js--chart--2"), configPokemon);
}

  getPokemon();