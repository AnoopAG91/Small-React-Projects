import React, { useState } from 'react'



function Newtodo() {
const [items,addItems] = useState("")
    return (
    <div className='Newtodo'>
        <input type='text' placeholder='enter items' value={items} onChange={(e)=>addItems(e.target.value)}/>
        <button>ADD</button>
    </div>
  )
}

export default Newtodo