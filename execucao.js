// botoes da primeira pagina

function irparaPaginadeLogin (){
    window.location.href = 'login.html';
}

function irparaPaginaCadastro (){
    window.location.href = 'cadastrar.html';
}

//botoes do cadastrar empresa etapas
 function irPaginaEndereco (){
    window.location.href = 'enderecoempresa.html';
 }
function irPaginaFuncionario(){
   window.location.href = 'funcionario.html';
}
function irPaginaEndereccoFuncionario(){
   window.location.href = 'enderecofuncionario.html';
}
function irLogarAoSistemaF(){
   window.location.href = 'login.html';
}
// botao de login

 function logarnoapp (){
    window.location.href = 'registrar.html';
 }

 var caminho = window.location.pathname;
 
 if (caminho.includes('/registrar.html')) {
   document.getElementById('registration').classList.add('ativo');
 } else if (caminho.includes('/banco.html')) {
   document.getElementById('bank-hours').classList.add('ativo');
 } else if (caminho.includes('/ausencia.html')) {
   document.getElementById('absence').classList.add('ativo');
 }

// Verifica qual botão de navegação corresponde à página atual


 // botao da tela registar
 function baterPonto (){
   // document.getElementById("btnjustica").innerHTML = "Ponto registrado com sucesso!";
   alert("Ponto registrado com sucesso") 
}
// função para armazenar os dados e horarios dos pontos
var pontos = [];

    function baterPonto() {
      var dataHora = new Date();
      var data = dataHora.toLocaleDateString();
      var hora = dataHora.getHours();
      var minutos = dataHora.getMinutes();
      var segundos = dataHora.getSeconds();

      var novoPonto = data + " " + hora + ":" + minutos + ":" + segundos;
      pontos.push(novoPonto);

      if (pontos.length > 4) {
        pontos.shift(); // Remove o primeiro elemento se houver mais de 4 pontos
      }

      var pontosTexto = "Últimos pontos registrados:<br>" + pontos.join("<br>");
      document.getElementById("ultimoPonto").innerHTML = pontosTexto;
    }

//botoes de navegação
function irPraRegistro(){
   window.location.href = 'registrar.html'
}
function irPraBanco(){
   window.location.href = 'banco.html';
}

function irPraAusencia(){
   window.location.href = 'ausencia.html';


}
// botão da tela de ausência
function EnviarArquivos(){
   alert("Arquivos enviando com sucesso!")
}


 // validação
 function validateFields() {
    const email = document.getElementById("email").ariaValueMax;
    if (!email) {
        document.getElementById('recover-password-button')
    }

 }
 // função para ver hora atual 
 function Time() {
   var date = new Date();
   var hour = date.getHours();
   var minute = date.getMinutes();
   var second = date.getSeconds();
   var period = "";
   if (hour >= 12) {
   period = "PM";
   } else {
   period = "AM";
   }
   if (hour == 0) {
   hour = 12;
   } else {
   if (hour > 12) {
   hour = hour - 12;
   }
   }
   hour = update(hour);
   minute = update(minute);
   second = update(second);
   
   document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
   
   setTimeout(Time, 1000);
   }
   function update(t) {
   if (t < 10) {
   return "0" + t;
   }
   else {
   return t;
   }
   }
   Time();