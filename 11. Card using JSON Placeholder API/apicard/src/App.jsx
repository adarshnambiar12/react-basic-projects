import React, { useEffect, useState } from 'react'
import {Navbar, Card, Footer} from './Components'
const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, []);

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto my-12 p-6'>

        {data.map(card => {
          return <Card key={card.id} props={card} />
        })}

      </div>
      <Footer/>
    </>
  )
}

export default App
