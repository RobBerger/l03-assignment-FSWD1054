import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Experience from './Experience';
import experiences from './Experiences';

function App() {
  return (
      <div>
        <Header />
        {
          experiences.map(experiences => (<Experience data={experiences} />))
        }
        <Footer />
      </div>
  );
}

export default App;