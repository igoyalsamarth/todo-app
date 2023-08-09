import './index.css';
import TodoRow from './components/TodoRow'
import React, {useState, createContext} from 'react'

let todoInfo = [{
  todoId:1,
  todoHeading:'Heading 1',
  todoDescription:'Description 1',
  todoActive: false
},
{ 
  todoId:2,
  todoHeading:'Heading 2',
  todoDescription:'Description 2',
  todoActive: false
}];

export const UseHeading = createContext();

function App() {
 const [newTodo, setNewTodo] = useState(todoInfo);
 const [heading, setHeading] = useState("");
 const [activeHeading, setActiveHeading] = useState(true);

  const newHeading = (e) => {
    setHeading(e.target.value)
  }
  const addNewTodo = (e) => {
    e.preventDefault();
    setNewTodo([{
      todoId:newTodo.length+1,
      todoHeading:heading,
      todoDescription:"Description",
      todoActive: false},
      ...newTodo]
      );
    setHeading("");
  }
  const disableHeading = (value) => {
    setActiveHeading(!value);
  }
  
  return (
    <UseHeading.Provider value={activeHeading}>
    <div className="mx-auto flex flex-col w-[90vw] bg-sky-200 pb-10">
      <div className='flex w-full mt-[5vh] pl-[25vw]'>
        <form className='space-x-5 space-y-5 w-full'>
          <input placeholder = "Whats instore for today ?" value = {heading} onChange = {newHeading} type = "text" className='w-1/2 rounded-sm outline outline-offset-2 outline-blue-500 focus:shadow-xl p-1'></input>
          <button disabled = {heading.length < 1 ?true:false} onClick= {addNewTodo} className={heading.length < 1 ? 'cursor-not-allowed bg-sky-300/100 rounded-sm px-2 py-1 text-base text-white font-bold hover:shadow-xl':' bg-sky-500/100 rounded-sm px-2 py-1 text-base text-white font-bold hover:shadow-xl'}>Submit</button>
          <input className = 'w-4 h-4' type='checkbox' onClick = {() =>disableHeading(activeHeading)}></input>
        </form>
      </div>
      <div className='mt-20'>
        <TodoRow data={newTodo} />
      </div>
    </div>
    </UseHeading.Provider>
  );
}

export default App;
