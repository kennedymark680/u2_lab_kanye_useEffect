import { useState, useEffect } from 'react'
import axios from 'axios'

const KanyeQuote = ({displayQuote}) => {

  const [quote, setQuote] = useState('')


const getKanyeQuote = async () => {
  try {
    const response = await axios.get("https://api.kanye.rest")
    setQuote(response.data.quote)
  } catch(err) {
    console.log(err)
  }
}

useEffect(() => {
  getKanyeQuote()
}, [displayQuote])


  useEffect(() => {
    // here is where we'll invoke our axios call helper function later
  })

  return (
    <h2 style={{fontStyle: 'italic'}}>{quote !== '' && quote}</h2>
  )
}

export default KanyeQuote