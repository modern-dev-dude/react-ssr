import './App.css';
import { LinkImage } from './components/LinkImage';
import { linkImgs } from './components/LinkImageConfig';
import { Button } from './components/Button';
import { ViteInfo } from './components/ViteInfo';

function App() {
  return (
    <div className="App">
      <div>
        {linkImgs.map((li) => (
          <LinkImage {...li} />
        ))}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button />
      </div>
      <ViteInfo />
    </div>
  );
}

export default App;
