import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [active, setActive] = React.useState(window.location.pathname.replace('/','')|| 'home')

    console.log(active)




    return (
        <header>
            <nav className='nav'>
                <div onClick={() => setActive('home')} className="logo">
                    <Link to='/'>
                        Logo
                    </Link>
                </div>
                <ul className={active}>
                    <Link onClick={() => setActive('home')} to='/'>Home</Link>
                    <Link onClick={() => setActive('gift')} to='/gift'>Gift</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav