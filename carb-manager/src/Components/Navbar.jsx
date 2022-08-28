import { NavLink } from "react-router-dom";
import {Image} from '@chakra-ui/react'
export default function Navbar( ){
    
    const isactive = {
        color : '#2dd29a',
        borderBottom :'3px solid #2dd29a'
    }

    const notActive = {
        color: 'black'
    }

    return (
        <div className="NavOutterDiv">
            <div className="logoDiv">
            <Image className="Navlogo" src="https://play-lh.googleusercontent.com/LI_Y6I6uMS_DrhO7tHDTH-_YaYLJLM3rS9yReRuGzbk8VfoZvkOlZh7zZfCCOakJGDs"/> <p>Carb Manager ®️</p>
            </div>
            <div className="NavInnerDiv">
            <NavLink style={({isActive})=> (isActive?isactive : notActive)} to='/'>Features</NavLink>
            <NavLink style={({isActive})=> (isActive?isactive : notActive)} to='/premium'>Premium</NavLink>
            <NavLink style={({isActive})=> (isActive?isactive : notActive)} to='/cookbook'>Cookbook</NavLink>
            <p>Log In</p>
            </div>
            <div className="LogInDiv">
                <button className="SignUpButton">Join For Free</button>
            </div>
        </div>  
    )
}