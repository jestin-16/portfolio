import logo from './logo.svg';
// import './App.css';
import jes from './images/jes.jpg';

function App() {
  return (
    <>
  
  <header className="w-full h-20 bg-blue-200">
<div className='flex items-center justify-between h-full px-4'>
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
    <div className="w-32 h-32 ">
      <img src={jes} alt="jestin"  className="object-cover w-32 h-32 rounded-full"/>
    </div>

  <div  className="h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-4xl ">Hello, I'm Jestin </p>
        <p className="text-4xl ">currently under development .Thanks for checking out my portfolio.
        I'm a software developer . </p>
        
      </div>
    </div>

   
   </>
  );
}

export default App;
