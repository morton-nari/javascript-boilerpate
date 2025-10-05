
const comments = () => {
    const list = document.getElementById('comments');
    let skip = 0;
    const limit = 5;


    function renderComments(comments, isNew = false) {
        comments.forEach(comment => {
            const item = document.createElement("li");
            item.classList.add("comment");
            item.textContent = `${comment.id}: ${comment.body}`;

            if (isNew) {
                item.classList.add("new");
                // remove highlight after 5s
                setTimeout(() => {
                    item.classList.remove("new");
                }, 5000);
            }

            list.appendChild(item);
        });
    }

    // fetch comments from API
    async function fetchComments(newBatch = false) {
        const response = await fetch(`https://dummyjson.com/comments?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        if (newBatch) {
            renderComments(data.comments, true);
        } else {
            renderComments(data.comments);
        }

    }


    async function init() {
        await fetchComments();
        skip += limit;
        // setup interval to fetch new comments every 5 seconds
        setInterval(async () => {
            await fetchComments(true);
            skip += limit;
        }, 5000);
    }
    init()
}

export default comments