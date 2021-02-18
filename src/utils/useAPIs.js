import { useMemo } from "react";
import useApiResult from "./useApiResult";
import {
  getInfo,
  getRockets,
  getRocketsById,
  getLaunches
} from "./requests";

const useInfo = () => {
  const request = useMemo(() => getInfo(), []);
  return useApiResult(request);
};

const useRockets = () => {
  const request = useMemo(() => getRockets(), []);
  return useApiResult(request);
};

const useRocketsId = (id) => {
  const request = useMemo(() => getRocketsById(id), []);
  return useApiResult(request);
};

const useLaunches = (option) => {
  const request = useMemo(() => getLaunches(option), [option]);
  return useApiResult(request);
};

export { useRocketsId, useRockets, useInfo, useLaunches };
