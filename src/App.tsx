import './App.css';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setAllCharacters } from './libs/redux/states/characters';
import { StoreModel } from './libs/redux/models';

function App() {
  return <div className="App"></div>;
}

const mapStateToProps = ({ character, characters }: StoreModel) => {
  return {
    character,
    characters,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setAllCharacters: () => dispatch(setAllCharacters()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
