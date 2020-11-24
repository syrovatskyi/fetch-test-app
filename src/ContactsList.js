import React, { Component } from 'react'
import Contact from './Contact'

class ContactsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=3')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        this.setState({
          results: data.results,
          resultsBuffer: data.results,
        })
      })
  }

  handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase()
    const results = this.state.results.filter((e) => {
      const fullName = e.name.first + e.name.last
      console.log('fullName = ', fullName)
      const searchValue = fullName.toLowerCase()
      return searchValue.indexOf(searchQuery) !== -1
    })
    if (event.target.value.trim() === '') {
      this.setState((state) => ({
        results: state.resultsBuffer,
      }))
      return
    }

    this.setState({
      results: results,
    })
  }

  render() {
    return (
      <>
        <input
          type="text"
          className="search-field"
          onChange={this.handleSearch}
        />
        <ul className="contacts-list">
          {this.state.results.map((e) => {
            return (
              <Contact
                key={e.id.name}
                firstName={e.name.first}
                lastName={e.name.last}
                phone={e.phone}
                image={e.picture.large}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default ContactsList
