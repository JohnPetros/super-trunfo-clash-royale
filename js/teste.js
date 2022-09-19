var cartaMabel = {
    nome: "Mabel",
    foto: "<img class='fotoPersonagem' src='https://pbs.twimg.com/media/EcYxP22XYAAYLfv.jpg' >",
    atributos: {
        curiosidade: 67,
        inteligencia: 58,
        magia: 8, 
        amizade: 94
    }
  }
  var cartaDipper = {
    nome: "Dipper",
    foto: "<img class='fotoPersonagem' src='https://pbs.twimg.com/profile_images/651504974250254336/Em1itNZe_400x400.jpg' >",
    atributos: {
        curiosidade: 88,
        inteligencia: 92,
        magia: 12, 
        amizade: 94
    }
  }
  var cartaWendy = {
    nome: "Wendy",
    foto: "<img class='fotoPersonagem' src='https://pbs.twimg.com/profile_images/378800000599245654/7bb23402d50de457016652a34a823327_400x400.png' >",
    atributos: {
        curiosidade: 68,
        inteligencia: 59,
        magia: 10, 
        amizade: 74
    }
  }
  var cartaStanley = {
    nome: "Stanley",
    foto: "<img class='fotoPersonagem' src='https://pm1.narvii.com/6665/a8ffabac2305e9cba2608d8bf3551594e77e20aa_hq.jpg' >",
    atributos: {
        curiosidade: 70,
        inteligencia: 75,
        magia: 10, 
        amizade: 69
    }
  }
  var cartaWaddles = {
    nome: "Waddles",
    foto: "<img class='fotoPersonagem' src='http://pm1.narvii.com/6521/19b8de646bc5d023f7f07ca2d7acb7e86ab9cad1_00.jpg' >",
    atributos: {
        curiosidade: 50,
        inteligencia: 62,
        magia: 10, 
        amizade: 88
    }
  }
  var cartaGideon = {
    nome: "Gideon",
    foto: "<img class='fotoPersonagem' src='https://64.media.tumblr.com/0a25b50ab0573497454f6cf17cd02af1/tumblr_nzfh9iQvXB1unqk7co2_500.jpg' >",
    atributos: {
        curiosidade: 55,
        inteligencia: 62,
        magia: 10, 
        amizade: 56
    }
  }
  var cartaPacifica = {
    nome: "Pacífica",
    foto: "<img class='fotoPersonagem' src='http://pm1.narvii.com/6674/0d4dc6bd6d91fef70e8db4e673c0096721659199_00.jpg' >",
    atributos: {
        curiosidade: 63,
        inteligencia: 71,
        magia: 6, 
        amizade: 60
    }
  }
  var cartaSheriff = {
    nome: "Sheriff Blubs",
    foto: "<img class='fotoPersonagem' src='https://i.pinimg.com/originals/35/50/6c/35506caaa5ae2f6c9d7e75c7f11740a1.jpg' >",
    atributos: {
        curiosidade: 63,
        inteligencia: 68,
        magia: 4, 
        amizade: 70
    }
  }
  var cartaStanford = {
    nome: "Stanford",
    foto: "<img class='fotoPersonagem' src='https://pbs.twimg.com/media/CREzi5IUEAApAKT.jpg' >",
    atributos: {
        curiosidade: 89,
        inteligencia: 95,
        magia:20, 
        amizade: 70
    }
  }
  var cartaBill = {
    nome: "Bill",
    foto: "<img class='fotoPersonagem' src='http://pa1.narvii.com/6631/e4acf27164b9b0ad4fab3f59a8b2f466b95547b0_00.gif' >",
    atributos: {
        curiosidade: 99,
        inteligencia: 98,
        magia:90, 
        amizade: 95
    }
  }
  
  var cartas = [cartaMabel, cartaDipper, cartaWendy, cartaStanley, cartaWaddles, cartaGideon, cartaPacifica, cartaSheriff, cartaStanford, cartaBill]
  var cartaMaquina;
  var cartaJogador;
  
  // sortearCarta();
  
  document.getElementById("btnProximo").style.filter = "brightness(25%)";
  document.getElementById("btnJogar").style.filter = "brightness(25%)";
  
  var pontosJogador = 0;
  var pontosMaquina = 0;
  
  atualizaPlacar();
  atualizaQuantidadeDeCartas();
  
  function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas');
    var html = "Quantidade de cartas restantes: " + cartas.length;
    
    divQuantidadeCartas.innerHTML = html;
  }
  
  function atualizaPlacar(){
    var divPlacar = document.getElementById('placar');
    var html = "Jogador " + pontosJogador + " vs " + pontosMaquina + " Oponente";
    
    divPlacar.innerHTML = html;
  }
  
  function sortearCarta(){
    
    var numeroCartaMaquina = (Math.floor(Math.random() * ((cartas.length - 1) - 0 + 1)) + 0);
    cartaMaquina = cartas[numeroCartaMaquina];
    
    cartas.splice(numeroCartaMaquina, 1);
    
    var numeroCartaJogador = (Math.floor(Math.random() * ((cartas.length - 1) - 0 + 1)) + 0);
    cartaJogador = cartas[numeroCartaJogador];
    
    cartas.splice(numeroCartaJogador, 1);
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
    document.getElementById("btnSortear").style.filter = "brightness(25%)";
    document.getElementById("btnJogar").style.filter = "brightness(100%)";
    
    var cartaOponente = "";
    cartaOponente += '<img class="moldura" src="https://i.pinimg.com/originals/8f/a7/93/8fa793226f091226675b454017afb7c7.png" alt="">';
    cartaOponente += "<p class='alinharFoto'>" + cartaMaquina.foto +"</p>";
    cartaOponente += '<img class="bandeiraNome" src="https://images.vexels.com/media/users/3/137112/isolated/preview/a4726d754a45925251c191b8be034e17-fita-branca-em-acirc-ngulo-by-vexels.png" alt="">';
    cartaOponente += "<h4>" + cartaMaquina.nome +"</h4><div class='atributos'>";
    cartaOponente += '<img id="vs" src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2021/03/Foto-VS-PNG-1024x862.png" alt="">';
    cartaOponente += "<div class='oponente' id='oponente'><p><b> Curiosidade:</b> " + cartaMaquina.atributos.curiosidade + "</p><div class='barra'><div class='progresso' style='width:" + cartaMaquina.atributos.curiosidade + "%'></div></div>";
    cartaOponente += "<p><b> Inteligência:</b> " + cartaMaquina.atributos.inteligencia + "</p><div class='barra'><div class='progresso' style='width:" + cartaMaquina.atributos.inteligencia + "%'></div></div>";
    cartaOponente +="<p><b> Magia:</b> " + cartaMaquina.atributos.magia + "</p><div class='barra'><div class='progresso' style='width:" + cartaMaquina.atributos.magia + "%'></div></div>";
    cartaOponente +="<p><b> Amizade:</b> " + cartaMaquina.atributos.amizade + "</p><div class='barra'><div class='progresso' style='width:" + cartaMaquina.atributos.amizade + "%'></div></div></div>";
    
    document.getElementById("computador").innerHTML = cartaOponente;
    
    document.getElementById("player").style.visibility = "visible";
    document.getElementById("computador").style.visibility = "visible";
    
    exibeCartaJogador();
    atualizaQuantidadeDeCartas();
  }
  
  function exibeCartaJogador() {
    
      var suaCarta = "";
      suaCarta += '<img class="moldura" src="https://i.pinimg.com/originals/8f/a7/93/8fa793226f091226675b454017afb7c7.png" alt="">';
      suaCarta += "<p class='alinharFoto'>" + cartaJogador.foto +"</p>";
      suaCarta += '<img class="bandeiraNome" src="https://images.vexels.com/media/users/3/137112/isolated/preview/a4726d754a45925251c191b8be034e17-fita-branca-em-acirc-ngulo-by-vexels.png" alt="">';
      suaCarta += "<h4>" + cartaJogador.nome +"</h4>";
      suaCarta += "<div class='atributos'><input type='radio' name='atributo' id='curiosidade' value='curiosidade'><label for='curiosidade'><p><b> Curiosidade:</b> " + cartaJogador.atributos.curiosidade + "</p></label><div class='barra'><div class='progresso' style='width:" + cartaJogador.atributos.curiosidade + "%'></div></div>";
      suaCarta += "<input type='radio' name='atributo' id='inteligencia' value='inteligencia'><label for='inteligencia'><p><b> Inteligência:</b> " + cartaJogador.atributos.inteligencia + "</p></label><div class='barra'><div class='progresso' style='width:" + cartaJogador.atributos.inteligencia + "%'></div></div>";
      suaCarta +="<input type='radio' name='atributo' id='magia' value='magia'><label for='magia'><p><b> Magia:</b> " + cartaJogador.atributos.magia + "</p></label><div class='barra'><div class='progresso' style='width:" + cartaJogador.atributos.magia + "%'></div></div>";
      suaCarta +="<input type='radio' name='atributo' id='amizade' value='amizade'><label for='amizade'><p><b> Amizade:</b> " + cartaJogador.atributos.amizade + "</p></label><div class='barra'><div class='progresso' style='width:" + cartaJogador.atributos.amizade + "%'></div></div></div>";
  
      document.getElementById("player").innerHTML = suaCarta;
  }
  
  function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName("atributo");
    for(var i = 0; i < radioAtributo.length; i++){
      if(radioAtributo[i].checked){
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    
    if(atributoSelecionado != null){
      
      document.getElementById("btnProximo").disabled = false;
      document.getElementById("btnJogar").disabled = true;
      
      document.getElementById("btnProximo").style.filter = "brightness(100%)";
      document.getElementById("btnJogar").style.filter = "brightness(25%)";
      
      document.getElementById("oponente").style.visibility = "visible";
      document.getElementById("vs").style.visibility = "hidden";
      
      if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
          pontosJogador++; 
          Swal.fire({
            icon: 'success',
            title: 'Parabéns',
            text: 'Você venceu!'
          })
        } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
          pontosMaquina++;
          Swal.fire({
            icon: 'error',
            title: 'Não foi dessa vez',
            text: 'Você perdeu.'
          })
        } else {
          Swal.fire({
            icon: 'info',
            title: 'Vocês empataram',
            text: 'Tente novamente.'
          })
        }
      }
    atualizaPlacar();
    atualizaQuantidadeDeCartas();
    
    if(cartas.length == 0){
      
      document.getElementById("btnSortear").disabled = true;
      document.getElementById("btnProximo").disabled = true;
      document.getElementById("btnJogar").disabled = true;
      
      document.getElementById("btnSortear").style.filter = "brightness(25%)";
      document.getElementById("btnProximo").style.filter = "brightness(25%)";
      document.getElementById("btnJogar").style.filter = "brightness(25%)";
      
      alert('Fim de Jogo');
      if(pontosJogador > pontosMaquina){
        Swal.fire({
          imageUrl: 'https://media0.giphy.com/media/KbqllD8CWjW2JjFBGt/source.gif',
          imageWidth: 200,
          imageHeight: 200,
          title: 'Parabéns',
          text: 'Você venceu!'
        })
      } else if(pontosJogador < pontosMaquina){
          Swal.fire({
            imageUrl: 'https://media2.giphy.com/media/1hMbkOaFfYmZvvEBq9/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            title: 'Não foi dessa vez!',
            text: 'Você perdeu'
          })
      } else{
         Swal.fire({
            title: 'Empate',
            text: 'Jogue novamente'
          })
      }
    }
  }

  
  function proximaRodada(){
    
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnProximo").disabled = true;
      
    document.getElementById("btnSortear").style.filter = "brightness(100%)";
    document.getElementById("btnProximo").style.filter = "brightness(25%)";
    
    document.getElementById("player").style.visibility = "hidden";
    document.getElementById("computador").style.visibility = "hidden";
    document.getElementById("oponente").style.visibility = "hidden";
  }

  alert(deck.length)
  const computerCardNumber = Math.floor(Math.random() * deck.length);
  computerCard = deck[computerCardNumber];
  deck.splice(computerCardNumber, 1);
  console.log("qtd de cartas: " + deck.length)
  const playerCardNumber = Math.floor(Math.random() * deck.length);
  console.log("player: " + playerCardNumber + " computer: " + computerCardNumber);
  playerCard = deck[computerCardNumber];
  deck.splice(playerCardNumber, 1);
  console.log("player: " + playerCard);

  disableButtons(true, false, true);
  setCard("player", playerCard);
  flipCard("player");
  updateCardsQuantity();