export type Venue = {
  venue_id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};

export type Event = {
  event_id: number;
  venue_id: number;
  name: string;
  start_date: string;
  end_date: string;
  venue: Venue;
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
