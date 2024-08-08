// Array de conteúdos divididos em três grupos
const conteudos = [
    [
        "Grécia me lembra filosofia",
        "Japão me lembra o monte Fuji e o Goku",
        "Coreia do sul me lembra Kpop"
    ],
    [
        "Alvorada me lembra minha vozinha",
        "Itália me lembra verão e cabriolet",
        "Florianópolis me lembra praia"
    ],
    [
        "Torres me lembra balonismo",
        "Portugal me lembra Nazaré",
        "Rio de Janeiro me lembra da minha sogra"
    ]
];

// Referência aos botões de navegação
const btnTab1 = document.getElementById('btn-tab1');
const btnTab2 = document.getElementById('btn-tab2');
const btnTab3 = document.getElementById('btn-tab3');

// Referência ao contêiner de conteúdo onde os itens serão exibidos
const content = document.getElementById('content');

// Função que exibe o conteúdo na tela com base nos itens fornecidos
function displayContent(items) {
    // Cria uma lista não ordenada
    const lista = document.createElement('ul');
    
    // Adiciona cada item à lista como um item de lista (li)
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });

    // Limpa o conteúdo existente e adiciona a nova lista ao contêiner
    content.innerHTML = '';
    content.appendChild(lista);
}

// Função para ativar o botão clicado e desativar os outros
function activateButton(activeButton) {
    // Remove a classe 'active' de todos os botões
    [btnTab1, btnTab2, btnTab3].forEach(btn => btn.classList.remove('active'));
    
    // Adiciona a classe 'active' ao botão clicado
    activeButton.classList.add('active');
}

// Função de callback para o evento de clique em um botão
function handleClick(event) {
    // Identifica qual botão foi clicado
    const btnId = event.target.id;
    
    // Ativa o botão clicado
    activateButton(event.target);

    // Exibe o conteúdo correspondente com base no botão clicado
    if (btnId === "btn-tab1") {
        displayContent(conteudos[0]);
    } else if (btnId === "btn-tab2") {
        displayContent(conteudos[1]);
    } else {
        displayContent(conteudos[2]);
    }
}

// Exibe o conteúdo inicial da primeira aba na carga da página
displayContent(conteudos[0]);

// Adiciona ouvintes de eventos de clique a cada botão para que eles chamem a função handleClick quando clicados
btnTab1.addEventListener("click", handleClick);
btnTab2.addEventListener("click", handleClick);
btnTab3.addEventListener("click", handleClick);
