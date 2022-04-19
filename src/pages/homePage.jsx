import React from "react";
import { Link } from 'react-router-dom'


export const Home = () => {

    
    return (
        <>
            <div className="App">
                <h1 >Bem vindo aos Hooks!</h1>
                <Link to="/useState">GO to UseState</Link>
                <br />
                <Link to="/useEffect">GO to useEffect</Link>
                <br />
                <Link to="/useCallback">GO to useCallback</Link> <br />
                <Link to="/useMemoPage">GO to UseMemoPage</Link>
            </div>
        </>

    )
}

export default Home;