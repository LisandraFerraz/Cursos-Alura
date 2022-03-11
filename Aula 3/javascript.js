var paulo = {
    nome: 'Paulo',
    logo: "<img src='https://img.elo7.com.br/product/original/33A535D/adesivo-de-parede-62x80cm-equipe-furia-cs-go-r0568-nebula-decor.jpg' height='35px' width='35px'>",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  }
  
  var rafa = {
    nome: 'Rafa',
    logo: "<img src='https://ih1.redbubble.net/image.605862175.2829/st,small,507x507-pad,600x600,f8f8f8.jpg' height='35px' width='35px'>",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  // console.log(paulo.vitorias)
  // console.log(rafa)
  
  rafa.pontos = calculaPontos(rafa)
  paulo.pontos = calculaPontos(paulo)
  
  function calculaPontos(jogador){
      var pontos = (jogador.vitorias * 3) + jogador.empates
      return pontos
  }
  
  var jogadores = [rafa, paulo]
  
  function adicionarJogador() {
    var novoJogador = prompt("Qual o nome do novo jogador?");
    var fotoItem = prompt("Insira a URL da logo do seu time.");
    var adcJogador = {
      nome: novoJogador,
      //adiciona uma imagem em uma linha
      logo: "<img src='"+fotoItem+"' height='35px' width='35px'>",
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    }
    
    // if (adcJogador.logo.endsWith('.jpg')){
    //   console.log('IMG OK')
    // }
    // else {
    //   alert('Desculpe, imagem inválida.')
    //   adcJogador.logo = ""
    // }
    
    jogadores.push(adcJogador)
    console.log(jogadores)
    exibirJogadores(jogadores)
  }
  
  exibirJogadores(jogadores)
  
  function exibirJogadores(jogadores){
    var html = ""
    
    for (var i = 0; i < jogadores.length; i++) {
      html += "<tr><td>" +jogadores[i].logo + "</td>"
      html += "<td>" +jogadores[i].nome + "</td>"
      html += "<td>" +jogadores[i].vitorias + "</td>"
      html += "<td>" +jogadores[i].empates + "</td>"
      html += "<td>" +jogadores[i].derrotas + "</td>"
      html += "<td>" +jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
      
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
  
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
  }
  
  function adicionarEmpate(i){
    console.log('clicou no botao empate')
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
  }
  
  function adicionarDerrota(i){
    console.log('clicou no botao derrota')
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadores(jogadores)
  }
  
  