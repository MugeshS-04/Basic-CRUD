import axios from 'axios'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const Update = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const book = location.state
  const id = book._id

  const [title, setTitle] = useState(book.title)
  const [author, setAuthor] = useState(book.author)
  const [theme, setTheme] = useState(book.theme)
  const [date, setDate] = useState(book.date?.substring(0, 10))

  const submithandler = async(e) => {

    e.preventDefault()

    const updated_book = {title, author, theme, date}

    try{
      const mess = await axios.put(`http://localhost:5000/api/updatebooks/${id}`, updated_book)
      console.log(mess.data)
      navigate('/display')
    }
    catch(error)
    {
      console.log(error)
    }
  }


  return (
    <div>
      <h1>BOOK UPDATE</h1>
      <form onSubmit={submithandler}>

        <label>Title :</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>

        <label>Author :</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        
        <label>Theme :</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value={theme}>{theme}</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
        
        <label>Date of Release :</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>

        <button type='submit'>Update</button>

      </form>
    </div>
  )
}

export default Update
