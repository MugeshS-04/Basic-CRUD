import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Entry = () => {

    const [title, SetTitle] = useState("")
    const [author, SetAuthor] = useState("")
    const [date, SetDate] = useState("")
    const [theme, SetTheme] = useState("")

    const handlesubmit = async(e) => {
        e.preventDefault()

        const book = {title, author, theme, date}

        try{
            const mess = await axios.post("http://localhost:5000/api/addbooks", book)
            console.log(mess.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }

  return (
    <div>
      <h1>BOOKS</h1>

      <form onSubmit={handlesubmit}>
        <label>Book Title : </label>
        <input type='text' placeholder='Enter here' value={title} onChange={(e) => SetTitle(e.target.value)}></input>
        
        <label>Author : </label>
        <input type='text' placeholder='Enter here' value={author} onChange={(e) => SetAuthor(e.target.value)}></input>

        <label>Theme : </label>
        <select value={theme} onChange={(e) => SetTheme(e.target.value)}>
            <option value="">Select Theme</option>
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Fantasy">Fantasy</option>
        </select>

        <label>Date Of Release :</label>
        <input type='date' value={date} onChange={(e) => SetDate(e.target.value)}></input>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Entry
