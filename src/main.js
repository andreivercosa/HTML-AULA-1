
        function mostrMsg(){
            alert("Testando...")
        }
  
        function dizOla(){
            var nome = document.getElementById("nomeUsuario").value;
            var sobrenome = document.getElementById("sobrenomeUsuario").value;
            var idade = document.getElementById("idadeUsuario").value;
            //alert("Ola, seja bem vindo " + nome + " " + sobrenome + " Idade: " + idade);
            var d = "Ola, seja bem vindo " + nome + " " + sobrenome + " Idade: " + idade;
            document.getElementById("conteudo").value = d;
            document.getElementById("comit").value = d;
        }
 