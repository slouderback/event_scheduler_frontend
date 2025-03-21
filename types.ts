export type Venue = {
  venue_id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};

export type Event = {
  event_id: string;
  venue_id: string;
  name: string;
  start_date: string;
  end_date: string;
  venue: Venue | null;
};

export type Track = {
  track_id: string;
  event_id: string;
  name: string;
  start_date: string;
  end_date: string;
  authorized_ticket_types: number[];
};

export type Session = {
  session_id: string;
  name: string;
  start_date: string;
  end_date: string;
};

export type Speaker = {
  speaker_id: string;
  first_name: string;
  last_name: string;
  email: string;
  social_link: string | null;
  role?: string;
};
