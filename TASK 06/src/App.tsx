// src/App.tsx
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;