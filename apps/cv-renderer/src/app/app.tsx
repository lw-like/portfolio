import { Route, Routes, Link } from 'react-router-dom';
import { CvForm } from './views/cv-form/cv-form';
import CvRenderer from './views/cv-renderer/cv-renderer';
import DevMenu from './common/dev-menu/dev-menu';

export function App() {
  return (
    <div>
      <DevMenu/>
      
      <Routes>
        <Route
          path="/"
          element={<CvForm />}
        />
        <Route
          path="/renderer"
          element={<CvRenderer />}
        />
      </Routes>
    </div>
  );
}

export default App;
