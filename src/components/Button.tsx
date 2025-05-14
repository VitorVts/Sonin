import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

export const Button = styled(TouchableOpacity)`
    width: 300px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 16px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin: 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
`;