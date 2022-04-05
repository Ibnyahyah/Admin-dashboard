import calendar from "../assets/images/calendar.svg";
import { LineChartTwo } from "./charts/chartTwo";

export default function ChartWidgetTwo() {
  return (
    <>
      <div className="chartWidget">
        <div className="chartSide">
          <ChartHeader />
          <LineChartTwo />
        </div>

        <div className="timeCardWrap">
          <div className="timeCard">
            <p className="timeText">Average Reply</p>
            <p className="timeMins">30 Mins</p>
          </div>
          <div className="timeCard">
            <p className="timeText">Average Reply</p>
            <p className="timeMins">1 Hours 30 Mins</p>
          </div>
        </div>
      </div>
    </>
  );
}

const ChartHeader = () => {
  return (
    <>
      <div className="chartHeaderContainer">
        <div className="chartHeaderRow">
          <p className="tabXText">Replies per resolution</p>
          <span className="perc">+4.4%</span>
        </div>
        <div className="chartHeaderRow">
          <div className="highPrior">
            <span className="dot2"> </span>
            <p className="tabXSmallText">High Priority</p>
          </div>

          <div className="calendarWrap">
            <p className="calendarText">This Month</p>
            <img src={calendar} alt="CalenderIcon" />
          </div>
        </div>
      </div>
    </>
  );
};
