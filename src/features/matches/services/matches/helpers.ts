import { Dispatch, SetStateAction } from 'react';
import { MatchesServiceDataState } from './types';


// TODO eventually use generic
// TODO this could go anywhere , it could be reused
export const getHandlersForMatchesServiceState = <T>(
  // TODO this is not even used
  // prevState: MatchesServiceDataState<T>,
  stateSetter: Dispatch<SetStateAction<MatchesServiceDataState<T>>>
) => {
  // TODO not sure if this will work
  // const isLoading = prevState.isLoading;
  // const errorMessage = prevState.errorMessage;
  // const isError = !!prevState.errorMessage;
  // const data = prevState.data;

  const setError = (error: string) => {
    stateSetter((prev) => {
      return {
        ...prev,
        errorMessage: error,
      };
    });
  };

  const startLoading = () => {
    stateSetter((prev) => {
      return {
        ...prev,
        isLoading: true,
      };
    });
  };

  const stopLoading = () => {
    stateSetter((prev) => {
      return {
        ...prev,
        isLoading: false,
      };
    });
  };

  const setData = (newData: T) => {
    stateSetter((prev) => {
      return {
        ...prev,
        data: newData,
      };
    });
  };

  return {
    // data,
    // errorMessage,
    // isError,
    // isLoading,
    setData,
    setError,
    startLoading,
    stopLoading,
  };
};
