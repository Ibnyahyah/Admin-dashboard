import calendar from "../assets/images/calendar.svg";
import { LineChart } from "./charts/chartOne";

export default function ChartWidgetOne() {
  return (
    <>
      <div className="chartWidget">
        <div className="chartSide">
          <ChartHeader />
          <LineChart />
        </div>

        <div className="timeCardWrap">
          <div className="timeCard">
            <p className="timeText">Average Response Time</p>
            <p className="timeMins">30 Mins</p>
          </div>
          <div className="timeCard">
            <p className="timeText">Responsive Time</p>
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
            <span className="dot1"> </span>
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
