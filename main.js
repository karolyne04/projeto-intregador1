//function irparaPaginaLogin(){

//}
//const botao = document.querySelector('#btnlogin')

//botao.onclick = () => {
    
//}

//const btnLogin = document.getElementById('btnLogin');
//btnLogin.addEventListener('click', function() {
  //  window.location.href = 'file:///home/carolyne/projeto%20intregador%20codigo/login.html';
//});
//buscar cep
const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const campo in result){

        if(document.querySelector("#"+campo)){

            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur",(e) => {
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)

        .then(response => {
                response.json()
                
                .then( data => showData(data))
            })
        .catch(e => console.log('Deu Erro: ' + e,message))
})

