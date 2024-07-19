import { SideBarData } from "./SidebarData";
import "../App.css";

export function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
        {SideBarData.map((val, key) => {
          return (
            <li key={key} id={window.location.pathname === val.path ? "active" : ""} className="list" 
            onClick={() => {window.location.pathname = val.path;}}>
              {" "}
              <div className="row">{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}