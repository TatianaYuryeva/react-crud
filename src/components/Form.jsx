import { Component } from "react"

export default class Form extends Component {
  state = {noteText: ''}

  constructor(props) {
    super(props)
    this.addNote = this.addNote.bind(this)
  }

  addNote(e) {
    e.preventDefault()

    fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: this.state.noteText})
    })

    this.setState({noteText: ''})

    setTimeout(this.props.onAddNote, 300)
  }

  render() {

    return(
      <>
      <form className="form" onSubmit={this.addNote}>
      <label htmlFor="note-text">New note</label>
        <textarea 
          value={this.state.noteText}
          onChange={e => this.setState({noteText: (e.target.value)})}
          name="note-text"
          cols="30" 
          rows="6"
          required>
        </textarea>
        <button className="btn btn-add"><ion-icon name="send-outline"></ion-icon></button>
      </form>
      </>
    )
  }
}