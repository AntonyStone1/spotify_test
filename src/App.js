import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './errorBoundary/ErrorFallback';

import { getAccessToken } from './redux/asyncActions';
import './App.css';
import ReleasesList from './components/ReleasesList/ReleasesList';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAccessToken())
  }, [])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReleasesList />
    </ErrorBoundary>

  );
}

export default App;
