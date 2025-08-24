import { useEffect, useState } from "react";

import { eventsAPI, type IEvent } from "./types/events";

//components
import Header from "./components/Header";
import EventList from "./components/EventList";
import Loading from "./components/Loading";


export default function App() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchEvents = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await fetch(eventsAPI);
        const data = await response.json();

        setIsLoading(false);
        setEvents(data);
      } catch (msg) {}
    }, 1000);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Header refresh={fetchEvents} />
      <EventList list={events} />
      <Loading state={isLoading} />
    
    </div>
  );
}
