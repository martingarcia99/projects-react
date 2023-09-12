import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useReducer } from 'react'

// 1. Create initial state
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create a reducer
function reducer (state, action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES'){
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  return state
}

function App() {

  // 3. usar el hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>Google Translate</h1>
    </div>
  )
}

export default App
