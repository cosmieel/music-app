import tracksList from '../assets/tracksList'

export const api = {
  getTracksList: () => {
    let result;

    try {
      result = tracksList;
    } catch (error) {
      console.error(error);
    }

    return result;
  },
}