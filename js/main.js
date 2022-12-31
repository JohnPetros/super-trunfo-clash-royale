const buttons = document.querySelectorAll("button");
const radios = document.querySelectorAll("input[type=radio]");
const flipAudio = document.getElementById("flipCard")
const winAudio = document.getElementById("win")
const loseAudio = document.getElementById("lose")
let computerCard = 0; 
let playerCard = 0;
let playerScore = 0
let computerScore = 0

const flipCard = (card) => {
  flipAudio.play();
  const cardGame = document.querySelector(`.card#${card}`);
  cardGame.classList.toggle("flip");
};

const highlightRadio = (event) => {
  const radio = event.target;
  radios.forEach((radio) => radio.parentNode.classList.remove("selected"));
  radio.parentNode.classList.add("selected");
};
radios.forEach((radio) => radio.addEventListener("change", highlightRadio));

const disableButtons = (...args) => {
  for (let i = 0; i < args.length; i++) {
    buttons[i].disabled = args[i];
  }
};

const setCard = (cardGame, card) => {
  const imageCard = document.querySelector(`.image.${cardGame}`);
  imageCard.style.backgroundImage = `url(${card.image})`;
  const nameCard = document.querySelector(`.name.${cardGame}`);
  nameCard.textContent = card.name;

  const attributesCard = document.querySelectorAll(`.${cardGame}.attribute-value`);
  const attributesValues = Object.values(card.attributes);
  attributesCard.forEach(
    (attribute, index) => attribute.textContent = attributesValues[index]);
    
    const bars = document.querySelectorAll(`.${cardGame} .bar`);
    bars.forEach(
      (bar, index) => bar.firstElementChild.style.width = attributesValues[index] + "%")

};

const updateCardsQuantity = () => {
  document.getElementById("cards-quantity").textContent = deck.length
}

const drawCard = () => {
  const computerCardNumber = Math.floor(Math.random() * (deck.length - 1));
  computerCard = deck[computerCardNumber];
  deck.splice(computerCardNumber, 1);


  const playerCardNumber = Math.floor(Math.random() * (deck.length - 1));
  playerCard = deck[playerCardNumber];
  deck.splice(playerCardNumber, 1);

  disableButtons(true, false, true);
  setCard("player", playerCard);
  flipCard("player");
  updateCardsQuantity();
};

const updateScore = () => {
  const playerScoreElement = document.querySelector(".player.score")
  const computerScoreElement = document.querySelector(".computer.score")

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

const showButtonEndGame = () => {
  const buttonsContainer = document.querySelector(".buttons-container")
  buttonsContainer.innerHTML = '<button id="play-again">Jogar Novamente</button>';
  document.querySelector("button").addEventListener('click', () => location.reload());

}

const verifyWin = () => {
  if (deck.length === 0) {
    disableButtons(true, true, true)
    if(playerScore > computerScore){
      Swal.fire({
        imageUrl: 'https://media0.giphy.com/media/KbqllD8CWjW2JjFBGt/source.gif',
        imageWidth: 200,
        imageHeight: 200,
        title: 'Parabéns',
        text: 'Você venceu!'
      })
      winAudio.play();
    } else if(playerScore < computerScore){
        Swal.fire({
          imageUrl: 'https://media2.giphy.com/media/1hMbkOaFfYmZvvEBq9/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          title: 'Não foi dessa vez!',
          text: 'Você perdeu'
        })
      loseAudio.play();
    } else{
       Swal.fire({
          title: 'Empate',
          text: 'Jogue novamente'
        })
    }
    showButtonEndGame()
  }
}

const highlightComputerAttribute = (computerAttribute) => {
  const computerAttributes = document.querySelectorAll('.computer .attribute-value')
  computerAttributes.forEach(attribute => attribute.parentElement.classList.remove('selected'));
  computerAttribute.parentElement.classList.add('selected')
}

const play = () => {
  let allRadiosUnchecked = [];
  radios.forEach(radio => allRadiosUnchecked.push(!radio.checked))  
  if(allRadiosUnchecked.every(unchecked => unchecked)) {
    alert("Escolha um dos atributos primeiro");
    return;
  }

  disableButtons(true, true, false);

  setCard("computer", computerCard);
  const selectedAttribute = document.querySelector('input[type="radio"]:checked').id;
  const playerAttribute = document.querySelector(`.player.${selectedAttribute}-value`)
  const playerValue = Number(playerAttribute.textContent)
  const computerAttribute = document.querySelector(`.computer.${selectedAttribute}-value`)
  const computerValue =  Number(computerAttribute.textContent)

  highlightComputerAttribute(computerAttribute)
  flipCard("computer")
  
  if (playerValue > computerValue) {
    playerScore++;
    Swal.fire({
      icon: 'success',
      title: 'Parabéns',
      text: 'Você venceu!',
      width: '44rem'
    })
  } 
   if (computerValue > playerValue) {
    computerScore++;
    Swal.fire({
      icon: 'error',
      title: 'Não foi dessa vez',
      text: 'Você perdeu.',
      width: '44rem'
    })
  } 
  if (computerValue == playerValue) {
      Swal.fire({
        icon: 'info',
        title: 'Vocês empataram',
        text: 'Tente novamente.',
        width: '44rem'
    })
  }

  updateScore();
  verifyWin();
};

const nextRound = () => {
  flipCard("player");
  flipCard("computer");
  radios.forEach((radio) => {
    radio.parentNode.classList.remove("selected")
    radio.checked = false
  })
  disableButtons(false, true, true);
}

const handleButtons = (event) => {
  const buttonFunction = event.target.id;
  if (buttonFunction === "draw-card") {
    drawCard();
  } else if (buttonFunction === "play") {
    play();
  } else if (buttonFunction === "next-round") {
    nextRound();
  }
};
buttons.forEach((button) => button.addEventListener("click", handleButtons));