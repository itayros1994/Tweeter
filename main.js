let tweeter = Twitter()
const renderer = Renderer()
renderer.rendererPosts(tweeter.getPosts())

$("body").on("click", "#post", function() {
    tweeter.addPost($("input").val())
    renderer.rendererPosts(tweeter.getPosts())
})

$("body").on("click", ".delete", function() {
    tweeter.removePost($(this).closest(".post").data().id)
    renderer.rendererPosts(tweeter.getPosts())

})

$("body").on("click", ".addComment", function() {
    tweeter.addComment($(this).closest("div").closest("div").data().id, ($(this).closest("div").find("input").val()))
    renderer.rendererPosts(tweeter.getPosts())
})

$("body").on("click", ".delete-comment", function() {
    tweeter.removeComment($(this).closest(".post").data().id, $(this).siblings("span").data().id);
    renderer.rendererPosts(tweeter.getPosts());

})