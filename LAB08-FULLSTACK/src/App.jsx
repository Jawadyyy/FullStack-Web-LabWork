import { Routes, Route, NavLink } from "react-router-dom";
import ClipboardDemo from "./ClipboardDemo";
import BasicForm from "./BasicForm";
import ControlledInput from "./ControlledInput";
import ValidatedForm from "./ValidatedForm"; 

function App(){
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/clipboard">Clipboard</NavLink> |
        <NavLink to="/form">Form</NavLink> |
        <NavLink to="/validated">Validated Form</NavLink> 
      </nav>

      <Routes>
        <Route path="/" element={<ControlledInput />} />
        <Route path="/clipboard" element={<ClipboardDemo />} />
        <Route path="/form" element={<BasicForm />} />
        <Route path="/validated" element={<ValidatedForm />} />
      </Routes>
    </div>
  );
}

export default App;
