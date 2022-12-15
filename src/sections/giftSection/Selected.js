import React from 'react'
import GiftImage from './../images/GiftImage.svg'

function Selected({ gift }) {
    const [open, setOpen] = React.useState(false)
    const img = React.useRef()
    function opening(){
        img.current.classList.add('fade-out')
        img.current.addEventListener('transitionend',()=>{
            setOpen(true)
        })
    }
    return (
        <div className='selected'>
            {
                open === false?<img ref={img} onClick={opening} src={GiftImage} />:<h1>{gift}</h1>
            }
            
        </div>
    )
}

export default Selected