import '../index.css'
import React, {useEffect, useState, useContext} from 'react'
import {UseHeading} from '../App'

export default function TodoRow(props){

    const [style, setStyle] = useState(props.data);

    const useHeading = useContext(UseHeading);

    useEffect(() => {
        setStyle(props.data);
    },[props.data]);

    const todoDone = (i) => {
        const updatedItems = style.filter((value) => {
            if(value.todoId === i){
                value.todoActive = !value.todoActive;
                console.log("inverted");
            }
            return value;
        })
        setStyle(updatedItems);
    };

    const todoItem = props.data.map((Item) => {
        return(
            <li key={Item.todoId} className='space-x-5 space-y-5 pl-[25vw]'>
                <input type='checkbox' className='accent-blue-300' onClick={() => todoDone(Item.todoId)}></input>
                <input type= 'text' className={Item.todoActive ? 'p-1 w-1/2 rounded-sm ring-1 ring-blue-400 line-through': 'p-1 w-1/2 rounded-sm ring-1 ring-blue-400'} value={useHeading? Item.todoHeading : Item.todoDescription}></input>
            </li>
        );
    });



    return(
            <ul>
                {todoItem}
            </ul>
    );
}