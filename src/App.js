  
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

  function App() {
    return (
      <>
        <Navbar title="Text Utilities" aboutText="About"/>
        <div className="container-fluid">
          <TextForm/>
        </div>
      </>
      );
  }

  export default App;
