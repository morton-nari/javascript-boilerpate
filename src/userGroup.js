const groupUser = () => {

    // async function fetchData() {
    //     const res = await fetch("https://dummyjson.com/todos?limit=18&skip=80");
    //     const data = await res.json();


    //     const groupUser = data.todos.reduce((acc, todo) => {
    //         const userId = todo.userId;
    //         if (!acc[userId]) {
    //             acc[userId] = [];
    //         }
    //         acc[userId].push(todo);
    //         return acc;
    //     }, {});

    //     console.log('this is raw data', data);
    //     console.log('this is grouped by user', groupUser);
    //     // Example: Log todos for userId 1
    //     console.log('Todos for userId 9:', groupUser[9]);
    //     for (const userId in groupUser) {
    //         console.log(`UserId: ${userId}, Todos:`, groupUser[userId]);
    //         const block = document.createElement('div');
    //         block.classList.add('user-block');
    //         block.innerHTML = `<h3>UserId: ${userId}</h3>`;
    //         const ul = document.createElement('ul');
    //         block.appendChild(ul);


    //         groupUser[userId].forEach(todo => {
    //             const li = document.createElement('li');
    //             li.textContent = `${todo.id}. ${todo.todo} ${todo.completed ? '(Completed)' : ''}`;
    //             if (todo.completed) li.style.color = 'green';
    //             ul.appendChild(li);
    //         });
    //         document.body.appendChild(block);
    //     }
    // }

    async function fetchData() {
        const res = await fetch("https://dummyjson.com/todos?limit=18&skip=80");
        const data = await res.json();
        console.log('this is raw data', data);

        const groupUser = data.todos.reduce((acc, todo) => {
            const userId = todo.userId;
            if (!acc[userId]) {
                acc[userId] = [];
            }
            acc[userId].push(todo);
            return acc;

        }, {});

        console.log('this is grouped by user', groupUser);

        for (const userId in groupUser) {
            console.log(`UserId: ${userId}, Todos:`, groupUser[userId]);
            const block = document.createElement('div');
            block.classList.add('user-block');
            block.innerHTML = `<h3>UserId: ${userId}</h3>`;
            const ul = document.createElement('ul');
            block.appendChild(ul);
            groupUser[userId].forEach(todo => {
                const li = document.createElement('li');
                li.textContent = `${todo.id} ${todo.todo} ${todo.completed ? '(completed)' : ''}`;
                if (todo.completed) li.style.color = 'green';
                ul.appendChild(li);
            });
            document.body.appendChild(block);
        }

    }

    fetchData();
}

export default groupUser