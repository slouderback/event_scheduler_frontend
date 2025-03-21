import { createContext, useContext, useState, ReactNode } from "react";
import { Event } from "../../types";

// Define the shape of our event context
type EventContextType = {
  event: Event | null;
  setActiveEvent: (event: Event) => void;
};

// Create the context with an undefined default value
const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  // Retrieve initial values from localStorage (if available)
  const storedEvent = localStorage.getItem("event");
  console.log("storedEvent", storedEvent);

  const [event, setEvent] = useState<Event | null>(
    storedEvent ? JSON.parse(storedEvent) : null
  );

  const setActiveEvent = (event: Event) => {
    setEvent(event);
    localStorage.setItem("event", JSON.stringify(event));
  };

  return (
    <EventContext.Provider value={{ event, setActiveEvent }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook for easy access to the EventContext
export const useActiveEvent = (): EventContextType => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useActiveEvent must be used within an EventProvider");
  }
  return context;
};
