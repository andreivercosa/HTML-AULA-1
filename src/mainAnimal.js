function dados(){
    var nome = document.getElementById("nomeAnimal").value;
    var raca = document.getElementById("racaAnimal").value;
    var idade = document.getElementById("idadeAnimal").value;
    //alert("Ola, seja bem vindo " + nome + " " + sobrenome + " Idade: " + idade);
    
    
    if(!nome){
        alert("Informe o Nome")
        return false
    }

    if(!raca){
        alert("Informe a Raça")
        return false
    }

    if(!idade){
        alert("Informe a Idade")
        return false
    }
    var d = "Nome: " + nome + " Raça: " + raca + " Idade: " + idade;
    document.getElementById("comit").value = d;
}