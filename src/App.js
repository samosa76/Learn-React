import Kerjasama from './Kerjasama/Kerjasama';
import Unitpendidikan from './UnitPendidikan/Unitpendidikan';
import Pendaftaran from './Pendaftaran/Pendaftaran';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Unitpendidikan />}></Route>
          <Route path='/Pendaftaran' element={<Pendaftaran />}></Route>
          <Route path='/Kerjasama' element={<Kerjasama />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
