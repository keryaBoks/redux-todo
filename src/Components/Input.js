import { useState } from "react"
import { useDispatch } from "react-redux"
import './Input.scss'

function Input() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const addTask = (inputTask) => {
        const newTask = {
            name: inputTask,
            id: Date.now()
        }
        dispatch({ type: 'ADD_TASK', payload: newTask });
    }

    const changeHandler = (event) => {
        setInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        addTask(input);
        setInput('');

    }

    return (
        <div className="main-div">
            <form onSubmit={submitHandler} className='ourForm'>
                <input
                    value={input}
                    placeholder="Add new todo here"
                    onChange={changeHandler}
                    className="myInput"
                />
            </form>
            <button className="buttonPlus circle" onClick={submitHandler}>+</button>
        </div>
    )
}

export default Input