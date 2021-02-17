import { useMemo } from "react";
import useApiResult from "../useApiResult";
import { getRocketsById } from "../requests";

const useRocketsId = (id) => {
  const request = useMemo(() => getRocketsById(id), []);
  return useApiResult(request);
};

export default useRocketsId;
