import { useState } from "react" 
function App() {
  const [color, setColor] = useState("olive")

return (
    
<div className="w-full h-screen duration-200"
style={{backgroundColor:color}}>
<div className="fixed inset-x-0 flex-wrap justify-center px-2 bottom-12"> <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">

<button  onClick = {() => setColor("red")}
 className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor:"red"}}>yellow</button>
<button onClick = {() => setColor("yellow")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor:"red"}}>Red

</button>
<button onClick = {() => setColor("green")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor:"red"}}>green</button>
</div>
    </div>
    </div>

  )
}

export default App
