import Countries from './Components/Countries/Countries'
import './App.css'
import { Suspense } from 'react';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {
  return (
    <>
      <h1>This is the beginning...</h1>
      <Suspense fallback={<p>Countries Loading....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
