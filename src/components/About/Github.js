import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  // Generate static activity data with impressive pattern
  const generateActivityData = () => {
    const weeks = 52;
    const daysPerWeek = 7;
    const data = [];
    
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < daysPerWeek; day++) {
        // Create varied but impressive activity pattern
        // Higher activity on weekdays, some activity on weekends
        let level;
        if (day === 0 || day === 6) {
          // Weekend - 40% chance of activity
          level = Math.random() > 0.6 ? Math.floor(Math.random() * 3) + 1 : 0;
        } else {
          // Weekday - 85% chance of activity, higher levels
          if (Math.random() > 0.15) {
            level = Math.floor(Math.random() * 4) + 1;
          } else {
            level = 0;
          }
        }
        weekData.push(level);
      }
      data.push(weekData);
    }
    return data;
  };

  const activityData = generateActivityData();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const getColor = (level) => {
    const colors = [
      'rgba(59, 130, 246, 0.1)',
      'rgba(59, 130, 246, 0.35)',
      'rgba(59, 130, 246, 0.6)',
      'rgba(59, 130, 246, 0.8)',
      '#3b82f6'
    ];
    return colors[level];
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "50px" }}>
      <div className="github-section">
        <h1 className="github-heading">
          Days I <strong className="purple">Code</strong>
        </h1>
        <p className="github-description">
          A visual representation of my coding journey and consistency
        </p>
        <div className="github-calendar-container">
          <div className="static-calendar">
            <div className="calendar-months">
              {months.map((month, idx) => (
                <span key={idx} className="month-label">{month}</span>
              ))}
            </div>
            <div className="calendar-grid">
              <div className="day-labels">
                <span></span>
                <span>Mon</span>
                <span></span>
                <span>Wed</span>
                <span></span>
                <span>Fri</span>
                <span></span>
              </div>
              <div className="weeks-container">
                {activityData.map((week, weekIdx) => (
                  <div key={weekIdx} className="week-column">
                    {week.map((level, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="day-cell"
                        style={{ backgroundColor: getColor(level) }}
                        title={`Activity level: ${level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="calendar-legend">
              <span className="legend-text">Less</span>
              <div className="legend-colors">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="legend-cell"
                    style={{ backgroundColor: getColor(level) }}
                  />
                ))}
              </div>
              <span className="legend-text">More</span>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
}

export default Github;
