import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * This hook suscribe to hash events and the returned state (currentHash),
 * and change when the hash has completed change
 */
export const useCurrentHash = () => {
  const router = useRouter();
  const { asPath } = router;
  const [currentHash, setCurrentHash] = useState<string>(asPath);

  const getPathHash = (hash: string): string => hash.slice(hash.indexOf("#"));

  const handleChangeCurrrentHash = (url: string) => {
    const currentPathHash = getPathHash(url);
    setCurrentHash(currentPathHash);
  };

  useEffect(() => {
    router.events.on("hashChangeComplete", handleChangeCurrrentHash);

    return () => {
      router.events.off("hashChangeComplete", handleChangeCurrrentHash);
    };
  }, [asPath]);

  useEffect(() => {
    handleChangeCurrrentHash(asPath);
  }, [asPath]);

  return {
    currentHash,
  };
};
