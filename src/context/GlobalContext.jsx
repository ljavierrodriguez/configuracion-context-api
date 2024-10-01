import { act, createContext, useEffect, useState } from "react";

export const Context = createContext(null)

const GlobalContext = ({ children }) => {

    const [store, setStore] = useState({
        todos: ["Comprar Pan"],
        users: null,
        posts: null
    })

    const [actions] = useState({
        addTask: (title) => setStore({ ...store, todos: store.todos.concat(title) }),
        getUsers: () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((responseJson) => setStore(store => ({ ...store, users: responseJson })))
                .catch((error) => console.log(error.message))
        },
        getPosts: () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((responseJson) => setStore(store => ({ ...store, posts: responseJson })))
                .catch((error) => console.log(error.message))
        }
    })

    useEffect(() => {
        actions.getUsers()
    }, [])

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    )
}

export default GlobalContext