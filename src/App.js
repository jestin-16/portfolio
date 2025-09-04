import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
  
  <header className="w-full h-20 bg-blue-200">
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

    <div  className="h-screen bg-black">
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-4xl text-white">Hello, I'm Jestin </p>
        <p className="text-4xl text-white">currently under development .Thanks for checking out my portfolio.
        I'm a software developer with a passion for building web applications. </p>
        
      </div>
    </div>

   
   </>
  );
}

export default App;
