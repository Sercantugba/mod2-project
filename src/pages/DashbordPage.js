import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'


const DashbordPage = () => (
  <section>
    <h1>Welcome to NBA Players website</h1>
    <p>Search for players</p>
    <SearchBar />
    <Link to="/posts" className="button">
      View Players
    </Link>
  </section>
)
export default DashbordPage

