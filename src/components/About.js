'use client'
import React, { useEffect, useState } from 'react'

const About = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((list) =>
            list.json()
        ).then(json => setData(json))
    }, [])
  return (
    <div>
      <h1>About</h1>
            {data && data.map((item) => {
                return <h3 key={item?.id}>{item?.email}</h3>
                
            })}
    </div>
  )
}

export default About
