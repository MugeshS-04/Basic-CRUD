import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Display = () => {

  const [book, setBook] = useState([])

  useEffect(() => {

    const getbook = async() => {
      const book_data = await axios.get('http://localhost:5000/api/getbooks')
      setBook(book_data.data)
    }

    getbook()

  },[])



  return (
    <div>
        {book.map((book) => (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
            <h2>{book.theme}</h2>
            <h2>{new Date(book.date).toLocaleDateString()}</h2>
          </div>
        ))}
    </div>
  )
}

export default Display
