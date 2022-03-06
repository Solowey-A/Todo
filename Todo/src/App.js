import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Header from "./components/header/header";

function App() {

    const [ticketTitle, setTitle] = useState('')
    const [item, setItem] = useState('')
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const newItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                item: item,
                tickets: {
                    id: uuidv4(),
                    title: ticketTitle
                }
            }

            setItems((items) => [...items, newItem])
            setItem('')
        } else {
            alert('test')
            setItem('')
        }
    }

    const deleteNode = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    // тут не понятно как дальше
    const updateColumn = (id) => {

        setItems((ticketTitle) => [...ticketTitle])
    }


    return (
        <div className="App">
            <Header/>
            <input type="text"
                   placeholder="Add title"
                   value={item}
                   onChange={(e) => setItem(e.target.value)}
            />
            <button onClick={newItem}>Add New Column</button>
            <div className="column-wrapper">
                {
                    items.map((item, index) => {

                        return (
                            <div key={item.id} id={item.id} className='main-column'>
                                <h3>{item.item}</h3>

                                <button onClick={() => deleteNode(item.id)}>X</button>

                                <div className="listItems">
                                    <input
                                        type="text"
                                           placeholder="Add Description"
                                        value={ticketTitle}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <button onClick={() => updateColumn(item.id)}>Add tick</button>
                                    {item.tickets.title}
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;

