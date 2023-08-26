import { Component } from "react";

export default class Note extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="notes__item">
        <button className="btn btn-remove" onClick={() => this.props.onRemoveNote(this.props.id)}>
        <ion-icon name="close-circle-outline"></ion-icon>
        </button>       
        {this.props.text}
      </div>
    )
  }
}