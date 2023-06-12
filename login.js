// botao de login
const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    errorEmailO: () => document.getElementById('error-email-o'),
    errorEmailI: () => document.getElementById('error-email-i'),
    errorPassword: () => document.getElementById('error-password'),
    login: () => document.getElementById('login')
  }
  function onChangeEmail() {
    toggleDisable();
    /* toggleError(); */
  }
  function onChangePassword(){
    toggleDisable();
    toglePasswordError();
  }
  function toggleError() {
    const email = form.email().value;
    form.errorEmailO().style.display = email ? "none" : "block";
    form.errorEmailI().style.display = email ? "none" : "block";
  }
  function toglePasswordError() {
    const password = form.password().value;
    form.errorPassword().style.display = password ? "none" : "block";
    
  }
  
  function toggleDisable() {
    const emailValid = isEmailValid();
    // document.getElementById('recover-password').disabled = !emailValid;
    
    const password = isPasswordValid();
    form.login().disabled = !emailValid || !password;
    console.log(emailValid, password)
  } 
  
   function isEmailValid() {
     const email = form.email().value;
     if (!email) {
       return false;
     }
     return true;
   }
  
   function isPasswordValid(){
     const password = form.password().value;
     if (!password) {
       return false;
     }
     return true;
   }
   function validateEmail(email) {
     return /\S+Q\S+./.test(email);
   }
     
  // botao de clique pra ir a pagina do sistema a primeira (registrar)
    function logarnoapp (){
      firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
      ).then(response => {
        window.location.href = 'registrar.html';
      }).catch(error => {
        alert(getErrorMessage(error));
      });  
    }
  function getErrorMessage(error) {
    if (error.code == "auth/user-not-found"){
      return "Usário não encontrado";
    }
    return error.message;
  }