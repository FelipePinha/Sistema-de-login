import * as C from "../../styled-components/global";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !password) {
            setError("preencha todos os campos");
            return;
        }

        const res = signIn(email, password);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

    return (
        <C.Container>
            <C.Label fontSize="1.8">Sistema de login</C.Label>
            <C.Content>
                <C.Label fontSize="1.6">Email</C.Label>
                <Input
                    placeholder="digite seu email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    type="text"
                />

                <C.Label fontSize="1.6">Senha</C.Label>
                <Input
                    placeholder="digite sua senha"
                    value={password}
                    onChange={(e) => [
                        setPassword(e.target.value),
                        setError(""),
                    ]}
                    type="password"
                />

                <C.LabelError>{error}</C.LabelError>
                <Button text="Logar" onClick={handleLogin} />
                <C.SignupLink>
                    Não tem conta?
                    <C.Strong>
                        <Link to="/signup"> Registre-se</Link>
                    </C.Strong>
                </C.SignupLink>
            </C.Content>
        </C.Container>
    );
};
