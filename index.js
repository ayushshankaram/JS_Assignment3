fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(info => {
        const team = info.data;

        const table = document.getElementById('table')

        team.forEach(mem => {
            
            // Creating a new row and layout 

            const row = document.createElement('tr');

            const id = document.createElement('td');
            const email = document.createElement('td');
            const firstName = document.createElement('td');
            const lastName = document.createElement('td');
            const avatar = document.createElement('td');
            const img = document.createElement('img');
           

            // Now giving values to tabledatas

            img.src = mem.avatar;
            avatar.appendChild(img);

            id.innerHTML = mem.id;
            email.innerHTML = mem.email;
            firstName.innerHTML = mem.first_name;
            lastName.innerHTML = mem.last_name;

            
            row.appendChild(id);
            row.appendChild(email);
            row.appendChild(firstName);
            row.appendChild(lastName);
            row.appendChild(avatar);

            table.appendChild(row);
        })
    })
    .catch(error => console.log(error));


    fetch('https://reqres.in/api/users/?page=2')
    .then(res => res.json())
    .then(info => {
        const team = info.data;

        const table = document.getElementById('table')

        team.forEach(mem => {
            
            // Creating a new row and layout 

            const row = document.createElement('tr');

            const id = document.createElement('td');
            const email = document.createElement('td');
            const firstName = document.createElement('td');
            const lastName = document.createElement('td');
            const avatar = document.createElement('td');
            const img = document.createElement('img');
           

            // Now giving values to tabledatas

            img.src = mem.avatar;
            avatar.appendChild(img);

            id.innerHTML = mem.id;
            email.innerHTML = mem.email;
            firstName.innerHTML = mem.first_name;
            lastName.innerHTML = mem.last_name;

            
            row.appendChild(id);
            row.appendChild(email);
            row.appendChild(firstName);
            row.appendChild(lastName);
            row.appendChild(avatar);

            table.appendChild(row);
        })
    })
    .catch(error => console.log(error));