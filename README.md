# Random User Cards Fake

Este projeto consiste em uma aplicação web que exibe cards com informações de usuários ficticios geradas aleatoriamente utilizando a API `https://randomuser.me/`. Os cards mostram uma foto, nome, e informações de contato dos usuários, e a interface é responsiva, adequada para desktop e dispositivos móveis.

![image](https://github.com/user-attachments/assets/185c4d11-ea0d-4b31-9215-48636cc80335)


## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- Google Fonts
- Google Icons

## Funcionalidades

- Exibe 10 cards de usuários aleatórios.
- Possui um botão "Refresh" para carregar novos usuários.
- Responsividade para diferentes tamanhos de tela.
- Estilo visual agradável com fonte semelhante à escrita manual.

## Como Funciona o Consumo da API

A API utilizada neste projeto é o `Random User Generator`, que fornece dados aleatórios de usuários no formato JSON. O consumo da API é feito através de uma requisição HTTP usando `fetch` em JavaScript. 

### Estrutura da API

A URL da API é: `https://randomuser.me/api/?results=10`

- `results=10`: O parâmetro `results` especifica quantos usuários serão retornados. Neste projeto, estamos solicitando 10 usuários.

### Implementação

A requisição para a API é feita quando a página é carregada e também quando o usuário clica no botão "Refresh". O código JavaScript responsável pela requisição é o seguinte:

```javascript
function fetchUsers() {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            displayUsers(users);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayUsers(users) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Limpa os cards existentes

    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-number">${index + 1}</div>
            <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <div class="contact-info">
                <div><i class="icon material-icons">email</i>${user.email}</div>
                <div><i class="icon material-icons">phone</i>${user.phone}</div>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}
