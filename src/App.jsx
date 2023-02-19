import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styled-components/reset";

function App() {
    return (
        <>
            <Outlet />
            <GlobalStyle />
        </>
    );
}

export default App;
