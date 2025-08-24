import type { IEvent } from "../types/events";

interface EventProps {
  event: IEvent;
}

export default function Event({ event }: EventProps) {
  // open current event details url
  const eventUrl = (url: string) => {
    window.open(url);
    window.close();
  };

  return (
    <div className="event">
      <div className="titlebar">{event.meta.title}</div>
      <div className={`magnitude ${event.magLevel}`}>
        <div className="item">{event.magnitude}</div>
        <div className="circle" style={{ animationDelay: "0s" }} />
        <div className="circle" style={{ animationDelay: "1s" }} />
        <div className="circle" style={{ animationDelay: "2s" }} />
        <div className="circle" style={{ animationDelay: "3s" }} />
      </div>

      {/* seismic event details */}
      <div className="details">
        <h1>{event.meta.date}</h1>
        <h2>{event.meta.time}</h2>
        <h3>{event.timeAgo}</h3>
      </div>

      <div
        className="eventurl"
        onClick={() => {
          eventUrl(event.detailUrl);
        }}
      >
        <div className="url"></div>
      </div>
    </div>
  );
}
