import { useState } from 'react'
import viteLogo from '/vite.svg'
function DrawRec(props) {

    return (
        <>
            <div className={`bg-[${props.color}] w-[${props.width}px] h-[${props.height}px]`}>

            </div>
        </>
    )
}

export default DrawRec