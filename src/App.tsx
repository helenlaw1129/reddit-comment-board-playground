import * as React from 'react';
import ContextProvider from './context';
import Comment from './pages/Comment';
// import the below test file to check the result
// import './tests/test1';
// import './tests/test2';

function App() {
  return (
    <ContextProvider>
      <Comment />
    </ContextProvider>
  );
}

export default App;
