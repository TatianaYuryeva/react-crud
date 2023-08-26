import { Component } from 'react'

import Form from './components/Form'
import Note from './components/Note'
import './App.css'

export default class App extends Component {
  state = {notes: []}

  componentDidMount() {
    this.fetchNotes()
  }

  fetchNotes = async () => {
    const response = await fetch('http://localhost:7070/notes')
    const data = await response.json()

    this.setState({notes: data})
  }

  removeNote = async (id) => {
    fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setTimeout(this.fetchNotes, 300) 
  }
    
  render() {
    return (
      <>
        <h2 className='header'>Notes</h2>
        <button className='btn btn-reload' onClick={this.fetchNotes} type='button'><ion-icon name="reload-outline"></ion-icon></button>
        <ul className="notes">
          {this.state.notes.map(item =>  (
            <li key={item.id}>
              <Note text={item.content} id={item.id} onRemoveNote={this.removeNote}/>
            </li>
          ))}
        </ul>
        <Form onAddNote={this.fetchNotes}/>
      </>
    )
  }
}
