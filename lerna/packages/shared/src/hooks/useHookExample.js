import { useState } from "react";

const useHookExample = () => {
  const [example] = useState("Example Hook");
  return example;
};

export default useHookExample;
