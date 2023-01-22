import React from "react";
import News from "../News/News";
import "./newslist.css"

function NewsList({ currentPosts }){
    return(
        <div className="news-list">
            {
                currentPosts?.map((news,index)=>(
                    <News news={news} key={index}/>
                ))
            }
        </div>
    )
}

export default NewsList