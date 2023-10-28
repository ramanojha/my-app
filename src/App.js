  
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

  function App() {
    return (
      <>
        <Navbar title="Text Utilities" aboutText="About"/>
        <div className="container-fluid">
          <TextForm textBox="Text Area" heading="Text Area to Change "/>
        </div>
      </>
      );
  }

  export default App;
