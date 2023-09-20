import Header from "./comp/Header";
import Body from "./comp/Body";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export const PUBLIC_URL = (process.env.PUBLIC_URL ? process.env.PUBLIC_URL+'/' : '')
console.log(PUBLIC_URL);

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/youtube-clone-tailwind-project" element={
            <>
              <Header />
              <Body/>
            </>
          }/>
        </Routes>
      </Router>
  );
}

export default App;
