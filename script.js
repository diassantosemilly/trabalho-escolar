document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Impede o recarregamento da página (comportamento padrão do form)
    event.preventDefault();

    const nome = document.getElementById('nome').value;

    // Alerta de sucesso utilizando o nome preenchido
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    
    // Limpa o formulário após o envio
    this.reset();
});
