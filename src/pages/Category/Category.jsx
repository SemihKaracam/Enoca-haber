import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NewsList from '../../components/NewsList/NewsList'
import "./category.css"
function Category() {
    const [news, setNews] = useState([])
    const { pathname } = useLocation();
    const catName = pathname.split("/")[2]
    useEffect(() => {
        const getNews = async () => {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${catName}&apiKey=676f017549224f488970f1835f9db971`)
            const articles = res?.data?.articles
            setNews([...articles])
            console.log(articles)
        }
        getNews()
    }, [pathname])
    return (
        <div className='category'>
            <h3>Category: <span>{catName}</span></h3>
            <NewsList currentPosts={news}/>
        </div>
    )
}

export default Category