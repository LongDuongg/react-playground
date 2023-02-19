export default function Dropdown({ renderToggle, renderExpand }) {
  return (
    <div className="dropdown-g3y">
      <div className="toggle">{renderExpand()}</div>
      <div className="expand">{renderToggle()}</div>
    </div>
  );
}
