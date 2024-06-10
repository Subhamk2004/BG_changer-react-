import './App.css'
import {useState} from "react";

function App() {
  let [color, setColor] = useState('#112');
  let changeColor = (new_bg_color) => {
      setColor(new_bg_color);
    }
  return (
      <div className="w-full h-screen duration-200"
           style={{backgroundColor: color}}
      >

          {/*  we can write the css of a element in itself as above in the element itself*/}
          {/*  now in this the color is the variable we have in useState, else if it was a
    constant value it will be in string format*/}

          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0
          w-auto h-auto bg-black rounded-lg overflow-hidden ml-3 mr-3
          gap-8'
          >
              {/*since onClick expects a function from us, so we can pass the
              function along with the parameters as below*/}
              <button onClick={() => {
                  changeColor('green')
              }} className='bg-green-500 rounded-lg px-4 py-2 mt-1 mb-1
              border-2 border-black'>
                  Green
              </button>
              <button onClick={() => {
                  changeColor('blue')
              }}  className='bg-blue-700 rounded-lg px-4 py-2 mt-1 mb-1
              border-2 border-black'>
                  Blue
              </button>
              <button onClick={() => {
                  changeColor('red')
              }}  className='bg-red-700 rounded-lg px-4 py-2 mt-1 mb-1
              border-2 border-black'>
                  Red
              </button>
              <button onClick={() => {
                  changeColor('yellow')
              }}  className='bg-yellow-500 rounded-lg px-4 py-2 mt-1 mb-1
              border-2 border-black'>
                  Yellow
              </button>
              <button onClick={() => {
                  changeColor('gray')
              }}  className='bg-gray-600 rounded-lg px-4 py-2 mt-1 mb-1
              border-2 border-black'>
                  Gray
              </button>
              <button onClick={() => {
                  changeColor('purple')
              }}  className='bg-purple-500 rounded-lg px-4 py-2 mt-1 mb-1
              border-2 border-black'>
                  Lavender
              </button>
              <button onClick={() => {
                  changeColor('white')
              }}  className='bg-white rounded-lg px-4 py-2 mt-1 mb-1
              border-2 border-black'>
                  White
              </button>
          </div>

      </div>
  )
}

export default App
