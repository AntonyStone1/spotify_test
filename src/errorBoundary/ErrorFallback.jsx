function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" style={{textAlign: 'center', marginTop: '100px'}}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export {ErrorFallback}