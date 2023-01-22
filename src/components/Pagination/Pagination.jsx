import React from 'react'
import "./pagination.css"
function Pagination({ totalPosts, postsPerPage, setCurrentPage,currentPage }) {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='pagination-container'>
            {
                pages.map((page,index)=>(
                    <button onClick={()=>setCurrentPage(page)} className={'pagination-btn'+(currentPage == page ? " active":"")}>{page}</button>
                ))
            }
        </div>
    )
}

export default Pagination



