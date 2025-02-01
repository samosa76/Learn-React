import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import UnitPendidikan from './Pages/UnitPendidikan';
import Pendaftaran from './Pages/Pendaftaran';
import Kerjasama from './Pages/Kerjasama';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<UnitPendidikan />}></Route>
          <Route path='/Pendaftaran' element={<Pendaftaran />}></Route>
          <Route path='/Kerjasama' element={<Kerjasama />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
