import { useClickOutside } from "../../hooks/useClickOutside";
export default function Dropdown({
  renderToggle,
  renderExpand,
  showOptions,
  componentName,
  componentRef,
  eventListener,
}) {
  useClickOutside({ ref: componentRef, handler: eventListener });

  return (
    <div ref={componentRef} className={componentName}>
      <div className="toggle">{renderToggle()}</div>
      {showOptions && <div className="expand">{renderExpand()}</div>}
    </div>
  );
}
