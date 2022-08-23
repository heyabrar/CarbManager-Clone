import { Link } from "react-router-dom";
import {Image} from '@chakra-ui/react'

export default function Navbar( ){
    return (
        <div className="NavOutterDiv">
            <div className="logoDiv">
            <Image boxSize={'50px'} src="https://play-lh.googleusercontent.com/LI_Y6I6uMS_DrhO7tHDTH-_YaYLJLM3rS9yReRuGzbk8VfoZvkOlZh7zZfCCOakJGDs"/> <p>Carb Manager ®️</p>
            </div>
            <div className="NavInnerDiv">
            <Link to='/'>Features</Link>
            <Link to='/premium'>Premium</Link>
            <Link to='/articles'>Articles</Link>
            <Link to='/cookbook'>Cookbook</Link>
            <Link to='/support'>Support</Link>
            </div>
            <div className="LogInDiv">
                <p>Log In</p>
                <button className="SignUpButton">Join For Free</button>
            </div>
        </div>
      

    )
}