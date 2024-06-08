import { FunctionComponent } from "react";
import "./dashboard.css"; 

export type DashboardType = {
  className?: string;
};

const Dashboard: FunctionComponent<DashboardType> = ({
  className = "",
}) => {
  return (
    <div className={`dashboard ${className}`}>
      <section className="vector-parent">
        <img className="frame-child" alt="" src="/vector-9.svg" />
        <div className="rectangle-parent">
          <div className="frame-item" />
          <p className="bonus-get-10-container">
            <b>{`Bonus: `}</b>
            <span>
              Get 10 points now by simply taking 5min to complete your Kinetic
              Profile!
            </span>
          </p>
          <div className="button-wrapper">
            <div className="button">
              <b className="this-is-a">Finish Profile for 10 points</b>
            </div>
          </div>
        </div>
        <div className="vector-group">
          <img className="frame-inner" alt="" src="/vector-10.svg" />
          <div className="container-parent">
            <img className="container-icon" alt="" src="/container.svg" />
            <div className="link">
              <div className="link-container">
                <a className="link1">Return to Dashboard</a>
                <div className="link-container-child" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
