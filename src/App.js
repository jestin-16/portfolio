import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //    <h2>Software Developer</h2>
      
    //   <p className='text-2xl text-red-500'>currently under development .Thanks for checking out my portfolio.
    //     I'm a software developer with a passion for building web applications.
    //    </p>
    //    </header>
    //    <section>
    //     <h3>About Me</h3>
    //    </section>
    // </div>
    
    <header className="w-screen h-10 bg-blue-200">
<div className='flex justify-between items-center px-4 h-full'>
  <div className="text-black font-fold">Software Developer</div>
  <nav>
    <ul className="flex space-x-4">
      <li >about</li>
      <li>services</li>
      <li>contact</li>
    </ul>
  </nav>
</div>
    </header>
  );
}

export default App;
