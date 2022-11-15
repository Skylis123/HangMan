let wordsList =["saptamana", "racheta", "electrocardiograma", "aplicatie" ,"brutarie" ,"lacusta", "trandafir" ,"temperament", "schizofrenic", "alfabeticeste"];
let totalWordsInList = wordsList.length;
let playingWord, playingWordLength ;
let failCounter = 0;
function startGame() {
    document.getElementById('hangManImageField').innerHTML='';
    document.getElementById('youLostMessage').innerHTML='';
    document.getElementById('youLostMessage').innerHTML='';
    document.getElementById('playedWord').innerHTML='';
    playingWord =  Math.floor(Math.random() * totalWordsInList);
    playingWordLength = wordsList[playingWord].length;
    const textField = document.createElement("input");
    Object.assign (textField, {
        id : "textField" 
    })
    document.getElementById("textFiledZone").appendChild(textField);
    const buttonSubmit = document.createElement("Button");
    Object.assign (buttonSubmit, {
        id : "buttonSubmit", 
        textContent : "Sumbmit",
        onclick : () => checkLetter()
    })
    document.getElementById("buttonSubmit").appendChild(buttonSubmit);
    for(let i = 0; i < playingWordLength; ++i) {
        const textArea = document.createElement("text");
        Object.assign(textArea, {
            id : i,
            textContent: " _ "
        })
        document.getElementById("playingField").appendChild(textArea);
    }
    const hangManImage = document.createElement("img");
    Object.assign (hangManImage, {
        id : "hangManImage",
        src : 'h0.png'
    })
    document.getElementById("hangManImageField").appendChild(hangManImage);
}

function checkLetter() {
    var textFieldWord = document.getElementById("textField").value; 
    var ok = 0;
    for (let i = 0; i < playingWordLength; ++i) {
        if(textFieldWord == wordsList[playingWord][i]) {
            document.getElementById(i).innerHTML = textFieldWord;
            ok = 1;
        }
    }
    if (ok == 0) {
        ++failCounter;
        if (failCounter == 1) {
            document.getElementById("hangManImageField").innerHTML = '<img src="h1.png">';
        }
        if (failCounter == 2) {
            document.getElementById("hangManImageField").innerHTML = '<img src="h2.png">';
        }
        if (failCounter == 3) {
            document.getElementById("hangManImageField").innerHTML = '<img src="h3.png">';
        }
        if (failCounter == 4) {
            document.getElementById("hangManImageField").innerHTML = '<img src="h4.png">';
        }
        if (failCounter == 5) {
            document.getElementById("hangManImageField").innerHTML = '<img src="h5.png">';
        }
        if (failCounter == 6) {
            document.getElementById("hangManImageField").innerHTML = '<img src="h6.png">';
        }
    }
    if (failCounter == 6) {
        document.getElementById('textFiledZone').innerHTML='';
        document.getElementById('buttonSubmit').innerHTML='';
        document.getElementById('playingField').innerHTML='';
        document.getElementById('youLostMessage').innerHTML='You Lost';
        document.getElementById('playedWord').innerHTML='The word is : ' + wordsList[playingWord];
        failCounter = 0;
    }
}
