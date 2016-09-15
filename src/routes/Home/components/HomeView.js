import React from 'react'
import { Link } from 'react-router'

export const HomeView = () => (
  <div>
    <h1>What's up, Redux?</h1>
    <p>HomeView represent</p>
    <Link to="/profile">Visit Profile</Link>
  </div>
)

export default HomeView

