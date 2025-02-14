import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {  
   return (
    <div className="card" style={{width: "18rem", backgroundColor:props.mode==='light'?'white':'#3d4853',color:props.mode==='light'?'black':'white'}}>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/018/796/706/small/vintage-typewriter-alphabet-letter-t-free-png.png" className="card-img-top" alt='pic not found'/>
    <div className="card-body style={{backgroundColor:props.mode==='light'?'white':'#3d4853',color:props.mode==='light'?'black':'white'}}">
      <h5 className="card-title" style={{color:props.mode==='light'?'black':'white'}}>TextGame</h5>
      <p className="card-text" style={{color:props.mode==='light'?'black':'white'}}>This is a fun project by Mr. Supritam Mohanty.</p>
      <Link to="/textform" className="btn btn-primary">Go to Homepage</Link>
    </div>
  </div>
    )
}