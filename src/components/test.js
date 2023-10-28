import React, {memo} from 'react'

const Test = () => {
    console.log("Testing Component Rendered.....");
    return (
        <div>
            <p style={{textAlign:"center"}}>Testing Component</p>
        </div>
    )
}
export const MemoizedTest = memo(Test)
