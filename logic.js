let Twitter = function() {

    const posts = [{
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 2;
    let commentIdCounter = 7;

    const getPosts = function() {
        return posts
    }

    const addPost = function(text) {
        posts.push({
            text: text,
            id: 'p' + ++postIdCounter,
            comments: []
        })
    }

    const removePost = function(postId) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === postId) {
                posts.splice(i, 1);
                console.log(posts)
            }
        }
    }

    const addComment = function(postId, text) {

        for (let i = 0; i < posts.length; i++) {
            if (postId === posts[i].id) {
                posts[i].comments.push({ id: 'c' + commentIdCounter++, text: text })


            }
        }
    }

    const removeComment = function(postId, commentId) {
        for (let i = 0; i < posts.length; i++) {
            if (postId === posts[i].id) {
                for (let j = 0; j < posts[i].comments.length; j++) {
                    if (commentId === posts[i].comments[j].id)
                        posts[i].comments.splice(j, 1);
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}