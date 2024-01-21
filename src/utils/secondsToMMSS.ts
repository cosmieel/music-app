import moment from "moment";

export default (seconds: number): string => moment.utc(seconds * 1000).format("mm:ss");