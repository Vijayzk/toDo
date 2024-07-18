import { useState } from "react"
import './App.css'

const ToDo = () => {



    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [list, setlist] = useState([])
    const [completed, setCompleted] = useState(false)

    const addtoList = () => {
        // console.log(title)
        // console.log(description)
        const i = 0;
        const newList = {
            id: list.length + 1,
            title: title,
            description: description
        };
        console.log(newList);
        console.log(list)
        setlist([...list, newList])
        setTitle('')
        setDescription('')
    }

    const deleteList = (id) => {
        setlist(list.filter((data) => data.id !== id))
    }


    return (
        <div className='container'>
             <h1 className='heading'>My TODOs</h1>
            <div className="todo-box">
                <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <button onClick={addtoList}>Add</button>
                <hr />
            </div>
            <div className="list">
                   <h1>To-Do's</h1>
                    {
                       (<ul className="todo-list">
                        {
                            list.map((data) => (
                                <li key={data.id}>
                                    <span>Title:{data.title}</span>
                                    <span>Description:{data.description}</span>
                                    <button onClick={() => deleteList(data.id)}>Delete</button>
                                </li>
                            ))
                        }
                    </ul>)
                    }
            </div>
            </div>
    )
}

export default ToDo
