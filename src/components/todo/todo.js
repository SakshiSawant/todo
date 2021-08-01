import React, { useEffect, useState } from 'react';
import "./style.css";

const getLocalData = () => {
    const lists = localStorage.getItem("todoList");

    if (lists) {
        return JSON.parse(lists);
    }
    else {
        return [];
    }
}

const Todo = () => {

    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());

    const addItem = () => {
        if (!inputdata) {
            alert('Add items');
        }
        else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputdata
            }
            setItems([...items, newInputData]);
            setInputData("");
        }
    }

    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    }

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <div><h1 className="title">To do</h1></div>
                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Item" className="form-control" value={inputdata} onChange={(event) => setInputData(event.target.value) }>
                        </input>
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                    </div>

                    {/* Show Items */}

                    <div className="showItems">
                        {items.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <i className="far fa-trash-alt delete-btn" onClick={() => deleteItem(curElem.id)}></i>
                                </div>
                            )
                        })}
                        
                    </div>

                    {/* Remove Items */}
                </div>
            </div>
        </>
    )
}

export default Todo