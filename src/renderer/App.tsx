import './App.css';
import ActionService from './service/ActionService';
import Transformer from './components/Transformer';

export default function App() {
  return (
    <ActionService>
      <Transformer />
    </ActionService>
  );
}
