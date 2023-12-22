import Home from "../src/pages/home/Home";
import {NextUIProvider} from "@nextui-org/react";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
   <NextUIProvider>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />}/>
       </Routes>
     </BrowserRouter>
   </NextUIProvider>
    </>
  )
}
export default App
