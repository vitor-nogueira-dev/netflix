import React from 'react'
import './FeaturedMovie.css'

const FeaturedMovie = ({ item }) => {
  return (
    <section className="featured">
      <div >{item.original_name}</div>
    </section>
  )
}

export default FeaturedMovie;
  

