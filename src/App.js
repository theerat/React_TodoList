import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/Header';
import CompletedSection from './components/CompletedSection';
import UnCompletedSection from './components/UnCompletedSection'

class App extends Component {

  state = {
    obj: [],
    showComplete: true,
  }

  onShowCompleted = (value) => {
    this.setState({
      showComplete: value
    })
  }

  onCreate = (newObj) => {
    const obj = this.state.obj;
    const newList = [...obj, newObj]
    this.setState({
      obj: newList
    })
  }

  onChange = (e, id) => {
    const obj = this.state.obj;
    const index = obj.findIndex(list => list.id === id);
    obj[index].isChecked = e.target.checked
    this.setState({
      obj: obj
    })
  }

  onDelete = (id) => {
    const obj = this.state.obj;
    const index = obj.findIndex(list => list.id === id);
    obj.splice(index, 1)
    this.setState({
      obj: obj
    })
  };


  render() {
    const obj = this.state;
    return (
      <div className="App ant-card ant-card-bordered">
        <HeaderSection data={obj} onCreate={this.onCreate} />
        <CompletedSection data={obj} onChange={this.onChange} onShowCompleted={this.onShowCompleted} onDelete={this.onDelete} />
        <UnCompletedSection data={obj} onChange={this.onChange} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
