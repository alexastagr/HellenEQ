import type { IEvent } from "../types/events";
import Event from "./Event";

interface IList {
  list: IEvent[];
}

function EventList({ list }: IList) {
  return (
    <div className="event-list">
      {list.map((event) => {
        return <Event key={event.id} event={event} />;
      })}
    </div>
  );
}

export default EventList;
