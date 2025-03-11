function pickValue(el){
    return document.getElementById(el);
  }
  const api = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/';
  
  const button = pickValue('search-button');
  const input = pickValue('search-input');
  const PokemonName = pickValue('pokemon-name');
  const id = pickValue('pokemon-id');
  const weight = pickValue('weight');
  const height = pickValue('height');
  const hp = pickValue('hp');
  const attack = pickValue('attack');
  const defense = pickValue('defense');
  const specialAttack = pickValue('special-attack');
  const specialDefense = pickValue('special-defense');
  const speed = pickValue('speed');
  const img = pickValue('img');

  button.addEventListener('click', async () => {
    const inputValue = input.value;
    try{
        const response = await fetch(`${api}${inputValue.toLowerCase()}`);
        
        const data = await response.json();
        PokemonName.innerHTML = data.name.toUpperCase();
        id.innerHTML = `#${data.id}`;
        weight.innerHTML = data.weight;
        height.innerHTML = data.height;
        hp.innerHTML = data.stats[0].base_stat;
        attack.innerHTML = data.stats[1].base_stat;
        defense.innerHTML = data.stats[2].base_stat;
        specialAttack.innerHTML = data.stats[3].base_stat;
        specialDefense.innerHTML = data.stats[4].base_stat;
        speed.innerHTML = data.stats[5].base_stat;
        img.src = data.sprites.front_default;
        pickValue('types').innerHTML = '';
        for(let i = 0; i < data.types.length; i++){
            const span = document.createElement('span');
            span.textContent = data.types[i].type.name;
            pickValue('types').appendChild(span);
        }
        
    }
    catch(err){
        alert('Pokémon not found')
    }
  })