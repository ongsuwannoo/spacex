import { useMemo } from "react";
import useApiResult from "../useApiResult";
import { getInfo } from "../requests";

const useInfo = () => {
  const request = useMemo(() => getInfo(), []);
  return useApiResult(request);
};

export default useInfo;
