document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://randomuser.me/api/?results=10';
    const cardsContainer = document.getElementById('cards-container');
    const refreshBtn = document.getElementById('refreshBtn');

    const fetchUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            renderCards(data.results);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const renderCards = (users) => {
        cardsContainer.innerHTML = ''; 
        users.forEach((user, index) => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <div class="card-number">${index + 1}</div>
                <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p><strong>Full Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>DOB:</strong> ${new Date(user.dob.date).toLocaleDateString()}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.state}</p>
                <p><strong>Country:</strong> ${user.location.country}</p>
                <div class="contact-info">
                    <div><span class="material-icons icon">email</span><span>${user.email}</span></div>
                    <div><span class="material-icons icon">phone</span><span>${user.phone}</span></div>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    };

    refreshBtn.addEventListener('click', fetchUsers);

   
    fetchUsers();
});
