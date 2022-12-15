import React from 'react'
import Selected from './Selected'
import Selecting from './Selecting'

function Gift() {
    const [gifted, setGifted] = React.useState(false)
    const [gift, setGift] = React.useState('')



    function takeGift(gift) {
        setGift(gift)
        setGifted(true)
        console.log(gift)
    }

    return (
        <section className='gift'>
            {
                gifted === false &&
                <Selecting getGift={takeGift} />
            }
            {
                gifted
                &&
                <Selected gift={gift}/>
            }
        </section>
    )
}

export default Gift