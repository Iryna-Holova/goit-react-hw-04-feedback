import styled from 'styled-components';

export const ButtonsContainer = styled.div`
margin-bottom: 20px;
text-align: center;
`;

export const OptionButton = styled.button`
width: 100px;
padding: 5px;
color: #ffffff;
background-color: #294e8685;
border-radius: 5px;
text-transform: capitalize;
font-weight: bold;
transition: background-color 500ms ease-out; 

:hover, :focus {
    background-color:#294e86;
}

:not(:last-child) {
    margin-right: 10px;
}
`;