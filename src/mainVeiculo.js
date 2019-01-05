function dados(){
    var marca = document.getElementById("marca").value;
    var cor = document.getElementById("cor").value;
    var modelo = document.getElementById("modelo").value;
    var ano = document.getElementById("ano").value;
    //alert("Ola, seja bem vindo " + nome + " " + sobrenome + " Idade: " + idade);
    
    
    if(!marca){
        alert("Informe a Marca")
        return false
    }

    if(!cor){
        alert("Informe a Cor")
        return false
    }

    if(!modelo){
        alert("Informe o Modelo")
        return false
    }

    if(!ano){
        alert("Informe o Ano")
        return false
    }
    alert("Marca: "+marca+"\nCor: "+cor+"\nModelo: "+modelo+"\nAno: "+ano)
    
}