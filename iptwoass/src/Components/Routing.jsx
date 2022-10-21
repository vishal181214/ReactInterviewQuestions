import React from 'react'
import {Link} from 'react-router-dom'
export default function Routing() {
  return (
    <div>
        <Link to="/" style={{marginRight:"5%"}} activeStyle={{color:'red'}} >Home</Link>
        <Link to="/Contact" style={{marginRight:"5%"}}>Contact</Link>
        <Link to="/About" style={{marginRight:"5%"}}>About</Link>
        <Link to="/Nopage" style={{marginRight:"5%"}}>Nopage</Link>
    </div>
  )
}
