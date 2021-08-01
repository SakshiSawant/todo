import React, { useState } from 'react';
import "./style.css";

const Todo = () => {

    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputdata) {
            alert('Add items');
        }
        else {
            setItems([...items, inputdata]);
        }
    }

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
                        {items.map((curElem, index) => {
                            return (
                                <div className="eachItem">
                                    <h3>{curElem}</h3>
                                    <div className="todo-btm">
                                        <i className="far fa-edit add-btn"></i>
                                        <i className="far fa-trash-alt add-btn"></i>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>

                    {/* Remove Items */}



                    <div className="showItems">
                        <button className="btn effect04 " data-sm-link-text="Remove All">
                            <span>Checklist</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo