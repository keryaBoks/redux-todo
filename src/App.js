import { useSelector } from 'react-redux';
import './App.scss';
import Input from './Components/Input';
import ToDo from './Components/ToDo';

function App() {

  const todo = useSelector(state => state.tasks);

  return (
    <div className="container app-container mt-5">
      <h1> Todo App</h1>
      <p>New Todo</p>
      <Input />
      {todo.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
          />
        )
      })}
      <p>There is {todo.length} pending tasks</p>
    </div>
  );
}

export default App;
