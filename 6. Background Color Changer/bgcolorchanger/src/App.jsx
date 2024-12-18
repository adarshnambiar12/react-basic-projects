import { useState } from "react";
import Button from "./Button";

function App() {

  const [color, setColor] = useState('Black');

  return (
    <>
      <div className="w-full h-screen duration-300 select-none"
        style={{ backgroundColor: color }}>
        <h1 className="fixed text-white text-center text-3xl font-bold font-sans mt-5 inset-0">Background Color Changer</h1>
        <div className="fixed flex flex-wrap justify-center p-2 bottom-5 inset-x-0">
          <div className="flex flex-wrap justify-center gap-2 bg-white py-2 px-3 rounded-full shadow-lg">
            <Button onClick={() => setColor("Red")} label="Red" />
            <Button onClick={() => setColor("Blue")} label="Blue" />
            <Button onClick={() => setColor("Green")} label="Green" />
            <Button onClick={() => setColor("Yellow")} label="Yellow" />
            <Button onClick={() => setColor("Pink")} label="Pink" />
            <Button onClick={() => setColor("Purple")} label="Purple" />
            <Button onClick={() => setColor("Cyan")} label="Cyan" />
            <Button onClick={() => setColor("Indigo")} label="Indigo" />
            <Button onClick={() => setColor("Orange")} label="Orange"/>
            <Button onClick={() => setColor("Brown")} label="Brown" />
            <Button onClick={() => setColor("Grey")} label="Grey" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
