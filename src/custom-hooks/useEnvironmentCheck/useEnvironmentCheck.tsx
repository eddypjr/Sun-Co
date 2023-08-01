import { useState, useEffect } from 'react';

const useEnvironmentCheck = (): boolean => {
  const [isLocal, setIsLocal] = useState<boolean>(false);

  useEffect(() => {
    const isLocalEnvironment: boolean =
      window.location.hostname === 'localhost';

    setIsLocal(isLocalEnvironment);
  }, []);

  return isLocal;
};

export default useEnvironmentCheck;
