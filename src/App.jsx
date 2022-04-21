import './App.css';
import { Button } from './components/Button';

function App() {
  
  return (
    <div className='App'>

      <Button
      border_style="Primary">Primary Button</Button>
      <Button
      border_style="Default">Default Button</Button>
      <Button
      border_style="Dashed">Dashed Button</Button>
      <Button
      border_style="None">Text Button</Button>
      <Button 
      border_style="Link">Link Button</Button>
    </div>
  )
}

export default App;

