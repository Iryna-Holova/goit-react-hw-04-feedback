import styled from 'styled-components';

export const StatisticTitle = styled.h2`
text-align: center;
margin-bottom: 20px;
`;

export const StatisticList = styled.ul`
/* width: 300px; */
margin: 0 auto 20px auto;
display: flex;
justify-content: center;
`;

export const StatisticListItem = styled.li`
box-sizing: border-box;
width: 100px;
padding: 5px;
background-color: #cee1e9;;
border-radius: 5px;
text-align: center;
text-transform: capitalize;

&:not(:last-child) {
    margin-right: 10px;
}
`;

export const SummaryItem = styled.div`
text-align: center;
font-weight: bold;
`;