import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(7);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  // Password generator logic - 
  //useCallback Hook:
  const generatePassword = useCallback(() => {
    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllow) string += '0123456789';
    if (charAllow) string += '~`!@#$%^&*()_+-={}[]:;,./<>?';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);


  //useEffect Hook :
  useEffect(() => {
    generatePassword();
  }, [length, numberAllow, charAllow, generatePassword]);


  //useRef hook:
  const passRef = useRef(null)
  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select();
  }, [password])

  return (
    <div className="w-full max-w-md mx-auto rounded-xl px-4 my-8 text-white bg-gradient-to-r from-blue-900 to-violet-800 shadow-lg pb-4 items-center content-center mt-50">
      <h1 className="text-center my-4 font-bold text-2xl">Password Generator</h1>
      <div className="flex overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          placeholder="This is password"
          className="w-full py-2 px-4 bg-amber-50 text-black rounded-l-xl text-lg"
          ref={passRef}
          readOnly
        />
        <button
          className="rounded-r-xl bg-amber-300 p-2 text-black hover:bg-amber-400  transition-transform active:scale-95"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex flex-wrap text-sm gap-x-6 bg-gray-700 p-2 rounded-xl">
        <div className="flex items-center">
          <input
            type="range"
            min={7}
            max={20}
            value={length}
            className="cursor-pointer border-2 border-amber-300 rounded-full accent-amber-300"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="flex">Length : {length}</label>
        </div>
        <div className="gap-x-2">
          <input
            id="number"
            type="checkbox"
            checked={numberAllow}
            className="cursor-pointer"
            onChange={() => setNumberAllow((prev) => !prev)}
          />
          <label htmlFor='number' >Number</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            id='character'
            type="checkbox"
            checked={charAllow}
            className="cursor-pointer"
            onChange={() => setCharAllow((prev) => !prev)}
          />
          <label htmlFor='character' >Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
