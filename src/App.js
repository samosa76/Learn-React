import Kerjasama from './Kerjasama/Kerjasama';
import Unitpendidikan from './UnitPendidikan/Unitpendidikan';
import Pendaftaran from './Pendaftaran/Pendaftaran';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Unitpendidikan />}></Route>
        <Route path='/Pendaftaran' element={<Pendaftaran />}></Route>
        <Route path='/Kerjasama' element={<Kerjasama />}></Route>
      </Routes>
    </div>
  );
}

export default App;
