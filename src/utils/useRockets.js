import { useMemo } from "react";
import useApiResult from "./useApiResult";
import { getRockets } from "./requests";

const useRockets = () => {
  const request = useMemo(() => getRockets(), []);
  return useApiResult(request);
};

export default useRockets;
