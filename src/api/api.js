import {ref, reactive} from 'vue'
const comments = reactive([])

const url = 'https://jsonplaceholder.typicode.com/comments?_limit=42'

function addComments(comment) {
    comments.push(comment)
}

function getComments() {
    return comments
}

async function fetchComments() {
    await fetch(url)
    .then((response) => response.json())
    .then((data)=> {
        data.map(comment => {
            addComments({
                postId: comment.postId,
                id: comment.id,
                name: comment.name,
                email: comment.email,
                body: comment.body
            })
        })
    })
}

export function commentsApi() {
    return {
        comments,
        fetchComments,
        getComments,
    }
}