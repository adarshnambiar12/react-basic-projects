import { useCallback, useEffect, useRef, useState} from 'react'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);

  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {

    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numbersAllowed) string += '0123456789';
    if (charAllowed) string += '~!@#$%^&*()_+=-/><;:';

    for (let i = 1; i <= length; i++) {
      pass += string.charAt(Math.floor(Math.random() * string.length));
    }

    setPassword(pass);

  }, [length, numbersAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charAllowed, setPassword])


  return (
    <>
      <div className="container mx-auto flex flex-col items-center p-6 bg-gray-100 shadow-md rounded-md max-w-md mt-10">

        <h1 className='text-3xl font-semibold text-blue-600 mb-6'>Password Generator</h1>

        <div className='w-full mb-4'>
          <label htmlFor="length" className='block text-sm font-medium text-gray-700 mb-1'>Password Length</label>
          <input type="number"
            name="length"
            id="length"
            className='w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            max='50'
            min='12'
            value={length}
            onChange={(e) => { setLength(e.target.value) }} />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="number" className="flex items-center gap-2">
            <input
              type="checkbox"
              id="number"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={numbersAllowed}
              onChange={(e) => setNumbersAllowed(e.target.checked)}
            />
            <span className="text-sm font-medium text-gray-700">Include numbers</span>
          </label>
        </div>

        <div className="w-full mb-4">
          <label htmlFor="char" className="flex items-center gap-2">
            <input
              type="checkbox"
              id="char"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
            />
            <span className="text-sm font-medium text-gray-700">Include characters</span>
          </label>
        </div>

        <button
          className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition-all duration-200"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>

        <div className="w-full mt-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Generated Password</label>
          <div className="flex gap-2">
            <input
              type="text"
              id="password"
              className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition-all duration-200"
              onClick={() => {
                navigator.clipboard.writeText(password).then(() => {
                  passwordRef.current.focus();
                });
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
