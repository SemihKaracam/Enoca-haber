import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NewsList from '../../components/NewsList/NewsList'
import "./search.css"
function Search() {
    const location = useLocation();
    const searchTerm = location.state.sTerm
    const [searchResults,setSearchResults] = useState()
    useEffect(()=>{
        const getNews = async()=> {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&q=${searchTerm}&apiKey=676f017549224f488970f1835f9db971`)
            const articles = res?.data?.articles
            setSearchResults([...articles])
        }
        getNews()
    },[searchTerm])
    console.log(searchTerm)
    return (
        <div className='search'>
            <h3 className='total-result'>Bulunan Toplam Sonuç: <span>{searchResults?.length}</span></h3>
            <h3 className='searched-term'>Aratilan terim: <span>{searchTerm}</span></h3>
            {
                searchResults &&
                <NewsList currentPosts={searchResults}/>
            }
        </div>
    )
}

export default Search