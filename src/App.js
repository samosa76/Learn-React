import logo from './logo.svg';
import './App.css';
import Kerjasama from './Kerjasama/Kerjasama';
import Navbar from './Navbar/Navbar';
import Unitpendidikan from './UnitPendidikan/Unitpendidikan';
import Pendaftaran from './Pendaftaran/Pendaftaran';
import Kerjasama from './Kerjasama/Kerjasama';
function App() {
  return (
    <div>
      <Unitpendidikan />
      <Pendaftaran />
      <Kerjasama />
    </div>
  );
}

export default App;
