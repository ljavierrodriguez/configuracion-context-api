import React, { useContext, useEffect } from 'react'
import { Context } from '../context/GlobalContext'

const HomeGlobalContext = () => {
    const { store, actions } = useContext(Context)

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            actions.addTask(e.target.value)
            e.target.value = ''
        }
    }

    useEffect(() => {
        actions.getPosts()
    }, [])

    return (
        <div>
            <input type="text" onKeyUp={handleKeyUp} />
            <ul>
                {
                    store.todos.length > 0 &&
                    store.todos.map((task, index) => <li key={index}>{task}</li>)
                }
            </ul>
            <ul>
                {
                    !!store.users &&
                    store.users.length > 0 &&
                    store.users.map((user) => <li key={user.id}>{user?.name}</li>)
                }
            </ul>
            <ul>
                {
                    !!store.posts &&
                    store.posts.length > 0 &&
                    store.posts.map((post) => <li key={post.id}>{post?.title}</li>)
                }
            </ul>
        </div>
    )
}

export default HomeGlobalContext