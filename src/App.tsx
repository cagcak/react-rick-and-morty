import './App.css';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setAllCharacters } from './libs/redux/states';
import { RootState } from './libs/redux/models';

function App() {
  return <div className="App"></div>;
}

const mapStateToProps = ({ character, characters }: RootState) => {
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
