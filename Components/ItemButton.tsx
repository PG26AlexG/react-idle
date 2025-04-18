"use client";
import { useState } from 'react';

// @ignore
function ItemButton (props: { onClick: () => void; text: string; }) 
{
    const [clickedNum, SetClickedNum] = useState(0);
    return (
        <button onClick={() => { SetClickedNum(clickedNum + 1); props.onClick()}} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            <p>{props.text + " " + clickedNum}</p>
        </button>
    );
}

export default ItemButton;