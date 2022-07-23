
import './App.css';
import Fetch from './components/Fetch';
import Post from './components/Post';
import Delete from './components/Delete';



function App() {
  return (
    <div className="App">
        <Post />
        <Delete />
        <Fetch />

    </div>
  );
}

export default App;