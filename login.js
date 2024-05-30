function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lógica de autenticação
    if (username === 'Pablo' && password === '1234') {
        // Autenticação bem-sucedida
        alert('Login bem-sucedido!');
        // Redirecionamento para a página principal após o login
        window.location.href = 'https://pablinxd24.github.io/Lista-de-compras5/';
    } else {
        // Autenticação falhou
        alert('Usuário ou senha incorretos.');
    }
}

// Adiciona o ouvinte de evento para a tecla "Enter" nos campos de entrada
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('username').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });

    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
});
