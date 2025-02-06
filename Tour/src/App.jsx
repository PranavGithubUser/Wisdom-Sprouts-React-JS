import { useState } from 'react'
import './App.css'
import data from './Data'
import Tour from './components/Tour'

function App() {
  const [state, setState] = useState(data);
  function Remove(id) {
    const discarded = state.filter((items) => items.id !== id);
    setState(discarded);
  }
  if (state.length === 0) {
    return (
      <div >
        <p className='text-center text-4xl font-extrabold text-center m-8'>
          Nothing Left🤔🙄
        <button
          onClick={() => {
            setState(data);
          }}
          className=' text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
        >
          Refresh
        </button>
        </p>
      </div>
    );
  }
  return (
    <>
      <div>
        <Tour data={state} Remove={Remove} />
      </div>
    </>
  );
}

export default App
