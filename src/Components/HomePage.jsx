import React, { useEffect, useState } from 'react'
import "./HomePage.module.css"
import axios from "axios"

const HomePage = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
      },[])

    const fetchData = async () => {
        setLoading(true);
        axios({
          method: 'get',
          url: "https://restcountries.com/v2/all"
        })
        .then(res => { 
          setData(res.data);
          console.log(res)
          setLoading(false);
        })
        .catch(err => {
          setError(true);
          setLoading(false);
        })
      }

      console.log(data)

    return (
        <div>
            <h1>HomePage</h1>
          
        </div>
    )
}

export default HomePage
