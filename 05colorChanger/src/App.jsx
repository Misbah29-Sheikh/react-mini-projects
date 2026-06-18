import { useState } from 'react'
import './App.css'


function App() {
  const colors = [
    "red", "blue", "green", "yellow", "orange", "purple",
    "pink", "brown", "black", "white", "gray", "cyan",
    "magenta", "lime", "teal", "navy", "maroon", "olive",
    "gold", "silver"
  ];

  const [color, setColor] = useState("white");

  const isDark = (c) =>
    ["black", "navy", "maroon", "purple", "blue", "green", "brown", "gray"]
      .includes(c);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl w-[340px]">
        
        <h1 className="text-lg font-bold text-center mb-4 text-white">
          Pick a Color 🎨
        </h1>

        <div className="grid grid-cols-5 gap-3">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`h-12 w-12 rounded-xl shadow-md border-2 transition-all duration-200 hover:scale-110 active:scale-95`}
              style={{
                backgroundColor: c,
                borderColor: color === c ? "white" : "transparent"
              }}
              title={c}
            />
          ))}
        </div>

        <p
          className="text-center mt-4 font-semibold"
          style={{ color: isDark(color) ? "white" : "black" }}
        >
          Selected: {color}
        </p>
      </div>
    </div>
  );
}

export default App;
