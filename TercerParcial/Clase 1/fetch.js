/***********************************/
/***********FETCH API***************/
/***********************************/

/*Permite hacer solicitudes de manera sencilla utilizando promesas,
se usa para obtener y enviar datos a un servidor*/


/*fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo Post',
        body: 'Contenido del post',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    /*A travez de funciones async/await*/

    /*async function obtenerDatos() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/3'); //espera a que se resuelva la promesa, la respuesta del servidor
            let data = await response.json();//se convierte la respuesta en un objeto json
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

console.log('Datos obtenidos', obtenerDatos());*/

//Cuando utilizamos fetch api
//Cuando necesitamos hacer solicitudes a un servidor o peticiones HTTP al navegador
//para interactuar con apis rest (JSON placeholder, etc)


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const list = document.getElementById('users');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            list.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));


