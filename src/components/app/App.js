
import { Component } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandomCharacter from '../randomCharacter/RandomCharacter';
import CharacterList from '../charactersList/CharacterList';
import CharacterInfo from '../characterInfo/CharacterInfo';
import vision from "../../resources/img/vision.png";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import '../../style/style.scss';

class App extends Component {
  state = {
    selectedChar: null
  }
  
  getCharId = (id) => {
    this.setState({selectedChar: id})
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomCharacter />
          </ErrorBoundary>
          <div className="character">
            <ErrorBoundary>
              <CharacterList onGetId={this.getCharId}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <CharacterInfo selectedChar={this.state.selectedChar}/>
            </ErrorBoundary>
          </div>
          <img src={vision} alt="Vision" className="main__bg-decoration"/>
        </main>
      </div>
    )}
}

export default App;
