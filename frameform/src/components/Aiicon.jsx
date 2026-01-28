import "../style/ai.css";
import { useState } from "react";
import FloatingChat from "./Aichat.jsx";
import OtherButton from "./buttonl.jsx";

function Aiicon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        {/* Pass handleOpen to the FloatingChat and the other button */}
        <FloatingChat isOpen={isOpen} setIsOpen={setIsOpen} />
        <OtherButton onClickOpen={handleOpen} />
      </div>
    </>
  );
}
export default Aiicon;
