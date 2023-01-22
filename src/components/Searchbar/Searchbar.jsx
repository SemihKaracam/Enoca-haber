import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./searchbar.css"
function Searchbar(){
    const [searchTerm,setSearchTerm] = useState("")
    const navigate = useNavigate()
    console.log(searchTerm)
    const handleSearch = (e) => {
        navigate(`/search?q=${searchTerm}`,{state:{sTerm:searchTerm}})
    }
    const handleKeyPress = (event) => {
        console.log(event.key)
        if(event.key == 'Enter'){
            handleSearch()
        }
    }
    return(
        <div className="searchbar-container">
            <input onKeyDown={handleKeyPress} onChange={(e)=>setSearchTerm(e.target.value)} className="search-input" type="text" placeholder="Search..."/>
            <button onClick={handleSearch} className="search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}

export default Searchbar