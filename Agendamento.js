document.getElementById("formAgendamento").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var nome = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;

    
    document.getElementById("nomeExtrato").innerText = nome;
    document.getElementById("dataExtrato").innerText = data;
    document.getElementById("horarioExtrato").innerText = horario;


    document.getElementById("extrato").style.display = "block";
});
