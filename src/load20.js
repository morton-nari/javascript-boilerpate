const load20 = () => {
    const list = document.getElementById('todos');
    const countDisplay = document.getElementById('count');
    const loadMoreBtn = document.getElementById('loadMore');

    let skip = 0;
    const limit = 20;
    let totalLoaded = 0;
    const MAX_TODOS = 80; // Assuming the API has a maximum of 100 todos


    async function fetchTodos() {
        const res = await fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`);
        const data = await res.json();
        renderTodos(data.todos);
        totalLoaded += data.todos.length;
        countDisplay.textContent = `Loaded: ${totalLoaded}`;
        skip += limit;

        if (totalLoaded >= MAX_TODOS) {
            loadMoreBtn.textContent = 'No more todos to load';
        }
    }

    function renderTodos(todos) {
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = `${todo.id}. ${todo.todo}`;
            if (todo.completed) li.style.color = 'green';
            list.appendChild(li);

        });
    }

    fetchTodos();
    loadMoreBtn.addEventListener('click', fetchTodos);
    console.log('load20 invoked');

}

export default load20