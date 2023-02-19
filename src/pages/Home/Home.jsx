import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import useAuth from "../../hooks/useAuth";

export const Home = () => {
    const { signOut, getEmail } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <C.Title>Welcome to the home page</C.Title>
            <C.P>seu email é: {getEmail()}</C.P>
            <Button text="Sair" onClick={() => [signOut(), navigate("/")]} />
        </C.Container>
    );
};
