import React from "react";

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                image='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                name='bob'
                size={200}
                />
                <p>HI?</p>
            </Navbar>

            <Navbar>
                hh
            </Navbar>
        </div>
    );
}

function Navbar({children}) {
    return (
        <header style={{backgroundColor:'yellow'}}>
            {children}
        </header>
    );
}

function Avatar({image, name, size}) {
    return (
        <div>
            <img
            src={image}
            alt={`${name}`}
            width={size}
            height={size}
            style={{borderRadius:'50%'}}
             />
        </div>
    )
}