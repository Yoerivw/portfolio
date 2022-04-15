import React from 'react'

const Nav = (props) => {



    return (
        <nav className="flex justify-center space-x-4 text-slate-50 text-2xl">

            <button onClick={props.onC}>About</button>
            <button>Projects</button>
            <button >Contact</button>

        </nav>

    )
}

export default Nav