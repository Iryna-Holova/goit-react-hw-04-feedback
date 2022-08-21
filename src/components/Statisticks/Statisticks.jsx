import PropTypes from "prop-types";
import { StatisticList, StatisticListItem, StatisticTitle, SummaryItem } from "./Statisticks.styled";

const Statisticks = ({ stats, total, positivePercentage }) => (
    <>
        <StatisticTitle>Statisticks</StatisticTitle>
        <StatisticList>
            {Object.entries(stats).map((entry, index) =>
                <StatisticListItem key={index}>{entry[0]}: {entry[1]}</StatisticListItem>
            )}
        </StatisticList>
        <SummaryItem>Total: {total}</SummaryItem>
        <SummaryItem>Positive feedback: {positivePercentage}%</SummaryItem>
    </>
);

export default Statisticks;

Statisticks.propTypes = {
    stats: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};