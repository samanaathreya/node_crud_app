
const apiUrl = 'http://localhost:5000/api/users';

async function getUsers() {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `ID: ${user.Id}, Name: ${user.Name}, Email: ${user.Email}`;
        userList.appendChild(userDiv);
    });
}

async function createUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {
        alert('User created successfully');
        getUsers();
    } else {
        alert('Failed to create user');
    }
}

async function updateUser() {
    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const email = document.getElementById('updateEmail').value;

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {
        alert('User updated successfully');
        getUsers();
    } else {
        alert('Failed to update user');
    }
}

async function deleteUser() {
    const id = document.getElementById('deleteId').value;

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        alert('User deleted successfully');
        getUsers();
    } else {
        alert('Failed to delete user');
    }
}

document.addEventListener('DOMContentLoaded', getUsers);
