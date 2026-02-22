

export function renderComments(comments){
    const list = document.getElementById("comments-list"); 

    list.innerHTML = "";

    if (comments.length === 0){
        list.innerHTML = "<li>No comments have been entered yet.</li>";
        return;
    }

    comments.forEach(comment => {
        const li = document.createElement("li");

        li.innerHTML += `<strong>${comment.username}:</strong>
                        <p>${comment.text}</p>
                        `;
        list.appendChild(li);

    });
    
    
}