function desenvolvimento(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  var nome = document.getElementsByName("text")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var telefone = document.getElementsByName("phone")[0].value;
  var mensagem = document.getElementsByName("message")[0].value;

  var link = "mailto:marcos.designtech@hotmail.com" +
             "?subject=" + encodeURIComponent("Novo formulário de contato") +
             "&body=" + encodeURIComponent("Nome: " + nome + "\n" +
                                           "Email: " + email + "\n" +
                                           "Telefone: " + telefone + "\n" +
                                           "Mensagem: " + mensagem);

  var mensagemEnviada = document.getElementById("mensagem-enviada");
  mensagemEnviada.innerText = "Mensagem enviada com sucesso!";
  mensagemEnviada.style.display = "block"; // Exibe a mensagem

  // Limpa os campos do formulário
  document.getElementsByName("text")[0].value = "";
  document.getElementsByName("email")[0].value = "";
  document.getElementsByName("phone")[0].value = "";
  document.getElementsByName("message")[0].value = "";

  return false; // Impede que o formulário seja submetido e a página seja recarregada
}