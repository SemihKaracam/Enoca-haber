import axios from 'axios'
import { useEffect, useState } from 'react'
import './home.css'
import NewsList from '../../components/NewsList/NewsList'
import Slider from '../../components/Slider/Slider'
import Pagination from '../../components/Pagination/Pagination'

function Home() {
  const [news, setNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)
  console.log(news)
  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get("https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971")
      const articles = res?.data?.articles
      setNews([...articles])
    }
    getNews()
  }, [])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const sliderPosts = news?.slice(0, 3)
  const restOfPosts = news?.slice(3)
  const currentPosts = restOfPosts?.slice(firstPostIndex, lastPostIndex)
  console.log(news)
  return (
    <div>
      <Slider
        sliderPosts={sliderPosts}
      />
      <NewsList
        currentPosts={currentPosts}    
      />
      <Pagination
        totalPosts={restOfPosts?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home




















