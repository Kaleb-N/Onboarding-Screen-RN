import React from 'react';
import { useState } from 'react';
import Onboard from './components/Onboard';
import Signup from './components/Signup';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }

  return (
    <>
      {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
      {!showOnboard && <Signup />}
    </>
  )
}

export default App;