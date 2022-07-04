import { Component } from "react";
import './App.css';

class Nav extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    fetch('list.json')
      .then(function (result) {
        return result.json();
      })

      .then(function (json) {
        console.log(json)
        this.setState({ list: json })
      }.bind(this));
  }
  render() {
    let listTag = [];
    for (let i = 0; i < this.state.list.length; i++) {
      let li = this.state.list[i]
      listTag.push(<li key={li.id}><a href={li.id}>{li.title}</a></li>)
    }
    return (
      <nav>
        <ul>
          {/* <li><a href="1">HTML</a></li>
          <li><a href="2">CSS</a></li>
          <li><a href="3">JavaScript</a></li> */}
          {listTag}
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}


//클래스 타입으로 변경
class App extends Component {
  state = {
    article: { title: "Welcome", desc: "Hello, React & Ajax" }
  }
  render() {
    return (
      <div className='App'>
        <h1>Web</h1>
        <Nav></Nav>
        <Article
          title={this.state.article.title}
          desc={this.state.article.desc}
        >
        </Article>
      </div>
    );
  }
}

// 합수타입
// function App() {
//   return (
//     <div className='App'>
//       <h1>Web</h1>
//       <Nav></Nav>
//       <Article></Article>
//     </div>
//   );
// }

export default App;
