import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    box-shadow: 0 1px 2px #0000;
    background-color: #fff;
    max-width: 350px;
    padding: 2rem;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: ${(props) => props.fontSize}rem;
    font-weight: 600;
    color: #676767;
`;

export const LabelError = styled.label`
    font-size: 1.4rem;
    color: #f00;
`;

export const SignupLink = styled.label`
    font-size: 1.6rem;
    color: #676767;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }
`;
