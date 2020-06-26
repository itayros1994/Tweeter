const Renderer = function() {
    const rendererPosts = function(posts) {

        $("#posts").empty();
        for (let i = 0; i < posts.length; i++) {
            const postContainer = $(`<div class="post" data-id=${posts[i].id}></div>`)

            postContainer.append(`<div class="post-text">${posts[i].text}</div>`);
            const commentContainer = $('<div id="comments"></div>')
            const deleteButton = $('<div><button class="delete">Delete Post</button></div>')
            const addComment = $(`<input></input> <button class="addComment">Comment</button>`)

            for (let j = 0; j < posts[i].comments.length; j++) {
                // $("#comments").append(`<div class="delete">X</div>`)
                commentContainer.append(`<div> <span class="delete-comment">X</span>` + `<span class="comments" data-id="${posts[i].comments[j].id}">${posts[i].comments[j].text}</span></div>`)
            }
            postContainer.append(commentContainer)
            postContainer.append(addComment)
            $("#posts").append(postContainer);
            postContainer.append(deleteButton)

        }

    }
    return {
        rendererPosts: rendererPosts
    }
}