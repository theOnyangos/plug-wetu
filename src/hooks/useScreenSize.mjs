import { useMediaQuery } from "react-responsive";

const useScreenSize = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile;
};

export default useScreenSize;
