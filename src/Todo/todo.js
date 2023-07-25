import React, { useState } from 'react'
import './todo.css'

function Todo() {
    const [addItems, setaddItems] = useState("") // This usestate is for storing and updating the input datas.
    
    const[addList,setaddList] = useState([])  // This usestate is for adding all the input datas to an array when the button get clicked.
    
    function handlebtn (){  // handle button is an onclick function where all te datas get stored to the array
        setaddList([...addList,addItems])  // setaddlist updates the state of addlist variable. 
                                             // spread operator used to creates a new array of addlist and 
                                                // it will add the updated values from the additems variable.
        setaddItems ("")  // this function will clear the input field after the button is clicked.
       console.log(addList)
    }

    function removeItems(i){  // this function is for removing the added list datas. it is taking i(index) as a parameter.
        const updatedList = addList.filter((elem, id)=>{   // using filter method to filter out the list data. 
            return i!==id  // retrn if index not equal to id.
        }) 
        setaddList(updatedList)   // updating the addlist variable with the updated list..
    }

  return (
    <div className='todo-wrapper'>
        <h1>TODO APP</h1>
        <input type='text' placeholder='addItems' value={addItems} onChange={(e)=>setaddItems(e.target.value)}/>
        <button className='add-btn' onClick={handlebtn}>ADD</button>

       
        {
            addList!==[] && addList.map((data, i) =>{   // map method used to go through each elements in the array with its index. data represents each elements in the array.

                return (      // returning each of the elements in the array 
                      
                    <>
                    
                     <div><h4>{data}</h4> <button className='remove-btn' onClick={()=>removeItems(i)}>Remove</button></div>{/* data represents each elements ib= the array and prints it in an h4 tag */}
                     {/*  delete button takes onclick event function as
                                                                               arrow function with (i) as parameter */}
                    </>
                
                )
            })
        }
    </div>
  )
}

export default Todo