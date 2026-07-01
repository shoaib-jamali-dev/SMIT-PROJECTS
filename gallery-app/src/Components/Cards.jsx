import React, { useEffect } from 'react'

const Cards = ({posts}) => {
  
  return (
    <>
      
        <div className='flex flex-wrap h-[100vh] gap-6 justify-center pt-10 overflow-hidden'>
            {posts.map(
                (post) => (
                    <div className='w-[330px] h-[220px] rounded-2xl overflow-hidden shadow-md'>
                        <img src={post.download_url} alt="" className='bg-contain' />
                    </div>
                )
            )}
        </div> 

    </>
  )
}

export default Cards
