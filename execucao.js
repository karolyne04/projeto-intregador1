// botoes da primeira pagina

function irparaPaginadeLogin(){
    window.location.href = 'login.html';
}

function irparaPaginaCadastro(){
    window.location.href = 'cadastrar.html';
}

//botoes do cadastrar empresa etapas
 function irPaginaEndereco(){
    window.location.href = 'enderecoempresa.html';
 }


// botao de login
 function logarnoapp(){
    window.location.href = 'registrar.html';
 }


 // validação
 function validateFields() {
    const email = document.getElementById("email").ariaValueMax;
    if (!email) {
        document.getElementById('recover-password-button')
    }

 }
 // hora
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