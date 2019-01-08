function dados(){
    // var marca = document.getElementById("marca").value;
    // var cor = document.getElementById("cor").value;
    // var modelo = document.getElementById("modelo").value;
    // var ano = document.getElementById("ano").value;
    //alert("Ola, seja bem vindo " + nome + " " + sobrenome + " Idade: " + idade);
    var marca = $("#marca").val()
    var cor = $("#cor").val()
    var modelo = $("#modelo").val()
    var ano = $("#ano").val()
    
    
    // if(!marca){
    //     $.alert("Informe a Marca")
    //     return false
    // }
    if(!marca){
        $.alert({
            title: 'Atenção',
            content: 'Informe a Marca',
            type: 'red'})
        return false
    }

    if(!cor){
        $.alert({
            title: 'Atenção',
            content: 'Informe a Cor',
            type: 'red'})
        return false
    }

    if(!modelo){
        $.alert({
            title: 'Atenção',
            content: 'Informe a Modelo',
            type: 'red'})
        return false
        return false
    }

    if(!ano){
        $.alert({
            title: 'Atenção',
            content: 'Informe a Ano',
            type: 'red'})
        return false
    }
   var t = "Marca: "+marca+"\nCor: "+cor+"\nModelo: "+modelo+"\nAno: "+ano
    $.alert({
        title: 'Sucesso',
        content: t,
        type: 'green'})
        
    
}