import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signIn = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password == password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem(
                    "user_token",
                    JSON.stringify({ email, token })
                );
                setUser({ email, password });
                return;
            } else {
                ("email ou senha incorretos");
            }
        } else {
            return "Usuário não encontrado";
        }
    };

    const signUp = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) return "Já existe um usuário com esse email";

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    const getEmail = () => {
        const user = JSON.parse(localStorage.getItem("user_token"));

        return user.email;
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signIn, signUp, signOut, getEmail }}
        >
            {children}
        </AuthContext.Provider>
    );
};
