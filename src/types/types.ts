export type Track = {
  id: number;
  src: string;
  preview: string;
  duration: number;
  title: string;
  artists: string;
};

export type AudioContextObject = {
  audio: HTMLAudioElement;
  currentTrack: Track;
  isPlaying: boolean;
  toggleAudio: (track: Track) => void;
};