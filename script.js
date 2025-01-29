// Função para exibir ou ocultar a descrição de cada tópico
function showDescription(id) {
    const description = document.getElementById(id);
    
    // Se a descrição já está visível, ocultar
    if (description.classList.contains('show')) {
        description.classList.remove('show');
    } else {
        // Caso contrário, mostrar a descrição
        description.classList.add('show');
    }
}
