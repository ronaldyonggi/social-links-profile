import { createRoot } from 'react-dom/client';
import './reset.css';
import './index.css';
import Card from './components/Card/Card';

export default function App() {
  return (
    <main>
      <Card />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
