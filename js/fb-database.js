const email = document.getElementById("email");
const btn = document.getElementById("btn");

const database = firebase.database();

btn.addEventListener('click', (e) => {
    e.preventDefault();

    database.ref('/newsletter/').set({
        _email: email.value

    })
})