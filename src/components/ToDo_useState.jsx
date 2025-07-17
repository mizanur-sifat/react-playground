import React, { useState } from 'react';

const ToDo_useState = () => {

    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    const addTodoList = () => {
        list.push(item)
        setList([...list])  //adding item to the list using setList
    }

    const RemoveItem = (id) =>{
        // alert(id)
        list.splice(id, 1);
        setList([...list])  // after deleting, make the list again
    }

    return (
        <div>
            <table>
                <tbody>
                    {
                        list.length !== 0 ? (
                            list.map((element, index) => {
                                return (
                                    <tr>
                                        <td>{element}</td>
                                        <td>
                                            <button onClick={()=>{RemoveItem(index)}}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (<tr></tr>)
                    }
                </tbody>
            </table>

            {/* <p>{list.length}</p> */}
            <input onChange={(e) => setItem(e.target.value)} type="text" placeholder='Item' />
            <button onClick={addTodoList} className="btn btn-lg btn-success">Add</button>
        </div>
    );
};

export default ToDo_useState;