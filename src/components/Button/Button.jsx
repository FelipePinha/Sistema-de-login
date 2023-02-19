import { StyledButton } from "./styles";

export const Button = ({ text, onClick, type = "button" }) => {
    return (
        <StyledButton onClick={onClick} type={type}>
            {text}
        </StyledButton>
    );
};
