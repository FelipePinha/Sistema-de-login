import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styled-components/reset";
import { AuthProvider } from "./contexts/auth";

function App() {
    return (
        <>
            <AuthProvider>
                <Outlet />
                <GlobalStyle />
            </AuthProvider>
        </>
    );
}

export default App;
