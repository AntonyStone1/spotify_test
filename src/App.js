import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './components/ErrorFallback';

import Releases from './components/Releases';
import { getAccessToken } from './redux/asyncActions';
import './App.css';



function App() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAccessToken())
  }, [])
  console.log(accessToken);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Releases />
    </ErrorBoundary>

  );
}

export default App;
