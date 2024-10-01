const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            todos: ["Comprar Pan"],
            users: null,
            posts: null,
            urlAPI: 'https://jsonplaceholder.typicode.com',
            search: ''
        },
        actions: {
            handleChange: (e) => {
                const { value } = e.target
                setStore({ search: value })
            },
            addTask: (title) => setStore({ todos: getStore().todos.concat(title) }),
            getUsers: (url) => {
                fetch(url+'/users')
                    .then((response) => response.json())
                    .then((responseJson) => setStore({ users: responseJson }))
                    .catch((error) => console.log(error.message))
            },
            getPosts: (url) => {
                fetch(url+'/posts')
                    .then((response) => response.json())
                    .then((responseJson) => setStore({ posts: responseJson }))
                    .catch((error) => console.log(error.message))
            },
            comandoEjemplo: () => {
                const { urlAPI } = getStore()
                const { getUsers, getPosts } = getActions()

                getUsers(urlAPI+'/users');
                getPosts(urlAPI+'/posts');
            }
        }
    }
}

export default getState