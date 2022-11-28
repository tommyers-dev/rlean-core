import { define } from "../../define";

type RLeanOfflineQueueType = {
  data: any;
};

const RLean_OfflineQueue = define<RLeanOfflineQueueType>(
  "rlean_offlineQueue",
  {}
);

export default RLean_OfflineQueue;
