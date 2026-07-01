import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import Cards from './Components/Cards'
import axios from 'axios'
import Pages from './Components/Pages'


const App = () => {
   
  const [postData,setPostData] = useState([])
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(9)

  const apiCall = async () => {
      const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      console.log(res.data);
      

        if(res.data){
          setPostData(res.data)
        } else {
          console.log("no data");
          
        }
  }

    useEffect( ()=>{
        apiCall()
    },[page])

  return (
   
    
    <>
      <NavBar />
      <Cards posts={postData} />
      <Pages page = {page} setPage={setPage}/>
    </>
  )
}

export default App
