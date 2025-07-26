import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>Book Management System</h1>
      <button onClick={() => navigate('/entry')}>Add Book</button>
      <button onClick={() => navigate('/display')}>Book Catelogue</button>
    </div>
  )
}

export default Home
