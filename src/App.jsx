import './App.scss';
import Kanban from './components/kanban';

function App() {
  return (
    <div style={{padding: '50px'}}>
      <h1 style={{ marginBottom:'20px'}}>
        Kanban App 
      </h1>
      <Kanban/>
      <h2>This Kanban App create by Halil ibrahim</h2>
    </div>
  );
}

export default App;
