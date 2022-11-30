// Components
import ExampleClass from './components/ExampleClass.js';
import exampleFun from './components/exampleFun.js';

class App
{
  constructor()
  {

    this.init();
  }
  init()
  {

    // Example Class 
    new ExampleClass();

    // Example Function
    exampleFun();
  }
}