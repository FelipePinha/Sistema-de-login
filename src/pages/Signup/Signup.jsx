import * as C from "../../styled-components/global";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export const Signup = () => {
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = () => {
        if (!email | !confirmEmail | !password) {
            setError("Preencha todos os campos");
            return;
        } else if (email != confirmEmail) {
            setError("os emails devem ser iguais");
            return;
        }

        const res = signUp(email, password);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso");
        navigate("/");
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

                <C.Label fontSize="1.6">Confirmar email</C.Label>
                <Input
                    placeholder="digite seu email"
                    value={confirmEmail}
                    onChange={(e) => [
                        setConfirmEmail(e.target.value),
                        setError(""),
                    ]}
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

                <Button text="cadastrar" onClick={handleSignUp} />

                <C.SignupLink>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/"> Entre</Link>
                    </C.Strong>
                </C.SignupLink>
            </C.Content>
        </C.Container>
    );
};
