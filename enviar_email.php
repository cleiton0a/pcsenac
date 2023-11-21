<?php
$destinatario = "cleitono162@mail.com";
$assunto = "Teste de Email";
$mensagem = "Este é um teste de envio de email.";

mail($destinatario, $assunto, $mensagem);
echo "Email enviado com sucesso!";
?>
