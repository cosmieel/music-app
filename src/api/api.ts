import tracksList from '../assets/tracksList.ts'
import { Track } from '../types/types.ts';

export const api = {
  getTracksList(): Track[] {
    let result: Track[];

    try {
      result = tracksList;
    } catch (error) {
      result = []
      console.error(error);
    }

    return result;
  },
}