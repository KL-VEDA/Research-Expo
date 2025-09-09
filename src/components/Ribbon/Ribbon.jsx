import "./Ribbon.css";

function Ribbon({ text, ribbon = "1" }) {
  const availableRibbons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // extendable
  const ribbonId = availableRibbons.includes(ribbon)
    ? ribbon
    : availableRibbons[availableRibbons.length - 1]; // fallback to last

  return (
    <div className={`ribbon ribbon-${ribbonId}`}>
      {text && <span className={`ribbon-label ribbon-label-${ribbonId}`}>{text}</span>}
    </div>
  );
}

export default Ribbon;
