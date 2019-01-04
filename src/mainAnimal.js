function dados(){
    var nome = document.getElementById("nomeAnimal").value;
    var raca = document.getElementById("racaAnimal").value;
    var idade = document.getElementById("idadeAnimal").value;
    //alert("Ola, seja bem vindo " + nome + " " + sobrenome + " Idade: " + idade);
    var d = "Nome: " + nome + " Raça: " + raca + " Idade: " + idade;
    document.getElementById("comit").value = d;
}