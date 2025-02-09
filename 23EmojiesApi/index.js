let btn = document.getElementById('btn');
let result = document.getElementById('result');

let emojis = [];
btn.addEventListener('click', async () => {
    let fetchData = await fetch('https://emoji-api.com/emojis?access_key=eb07cb0c6a832b15a3dc7655562312409b676132');
    let response = await fetchData.json();
    
    for(let i = 0; i < 1500; i++){
        emojis.push({
            emojiName : response[i].unicodeName,
            emojiCharacter : response[i].character
        })
    }
    let randomNum = Math.floor(Math.random() * emojis.length);
    btn.innerHTML = emojis[randomNum].emojiCharacter;
    result.innerHTML = emojis[randomNum].emojiName.slice(5,);
})
