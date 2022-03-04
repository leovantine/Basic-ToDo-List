import React, { Component } from "react";
import "./styles.css";
export default class ToDoList extends Component {
  state = {
    tarefa: "",
    listaDeTarefa: []
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  add = () => {
    let { tarefa, listaDeTarefa } = this.state;
    if (tarefa !== "") {
      this.setState({
        listaDeTarefa: listaDeTarefa.concat({
          tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };

  remove = (id) => {
    let { listaDeTarefa } = this.state;
    this.setState({
      listaDeTarefa: listaDeTarefa.filter((item) => item.id !== id)
    });
  };

  render() {
    let { handleChange, add, remove } = this;
    let { tarefa, listaDeTarefa } = this.state;
    return (
      <div>
        <h1>GET ORGANISED WITH</h1>
        <p class="title">TO-DO LIST!✨</p>
        <div class="writespace">
          <input
            placeholder="TYPE HERE"
            value={tarefa}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div class="click">
          <button onClick={add}>ADD</button>
        </div>
        <div class="positionlist">
          {listaDeTarefa.map((item) => (
            <ul>
              <li>{item.tarefa}</li>
              <img
                onClick={() => remove(item.id)}
                alt="trashicon"
                src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"
              />
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
