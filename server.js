var usuario = "1234@gmail.com"
var passoword = "1234"


function check_login(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;


    if(usuario == email && passoword == senha){
        document.location.href = "pagina2.html"

    }else{
        alert("Usuario ou senha errados");
        alert(" TESTE [usuario = 1234@gmail.com] e [senha = 1234]")
    }
}
function recadastrar(){
    var email = document.getElementById("email").value;
    

    if(usuario == email == true){
        alert("Um email será enviado com sua nova senha");

}  else{
    alert("Usuario não encontrado");
        }
    
}
