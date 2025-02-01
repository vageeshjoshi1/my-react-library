import React from 'react'

import { ExampleComponent, Button } from 'my-react-library'
import 'my-react-library/dist/index.css'
// import Button from '../../src'

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button>Something</Button>
    </div>
  )
}

export default App
