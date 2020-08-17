import React from 'react'
import { Link } from 'react-router-dom'
const DashbordPage = () => (
  <section>
    <h1>Welcome to NBA Players website</h1>
    <p>Search for players</p>
    <Link to="/posts" className="button">
      View Players
    </Link>
  </section>
)
export default DashbordPage

