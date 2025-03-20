export const ENDPOINTS = {
  EVENTS: "/events/",
  TRACK: (trackId: string) => `/tracks/${trackId}`,
  TRACKS_BY_EVENT: (eventId: string) => `/tracks/event/${eventId}`,
  SESSION_BY_TRACK: (trackId: string) => `/sessions/by_track/${trackId}`,
  SESSION: (sessionId: string) => `/sessions/${sessionId}`,
  SPEAKERS_ON_SESSION: (sessionId: string) =>
    `/speakers/by_session/${sessionId}`,
};
