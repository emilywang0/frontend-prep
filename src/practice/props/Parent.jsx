import { useState } from "react";
import Button from "./Button";
export default function App() {
  const [isActive, setIsActive] = useState(false);

  const handleSetActive = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <input type="checkbox" checked={isActive} onChange={handleSetActive} />
      <Button isActive={isActive} />
    </>
  );
}
