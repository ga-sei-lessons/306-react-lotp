import React, { Component } from "react"
// css module
import "./App.css"
import Movie from "./Movie"

const movies = [
  {
    title: "The Fellowship of the Ring",
    hours: "2",
    minutes: "58"
  },
  {
    title: "The Two Towers",
    hours: "2",
    minutes: "59"
  },
  {
    title: "The Return of the King",
    hours: "3",
    minutes: "21"
  },
  {
    title: "The Hobbit Part 1"
  }
]

export default class App extends Component {
  render() {
    const movieComponents = movies.map((movie, i) => {
      return (
        <Movie 
          key={'movie' + i}
          title={movie.title}
          hours={movie.hours}
          minutes={movie.minutes}
        />
      )
    })

    return (
      <div className="dark-background">
        <h1>Lord of the Props</h1>

      {movieComponents}
      </div>
    )
  }
}