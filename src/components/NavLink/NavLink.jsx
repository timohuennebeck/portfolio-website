import "./NavLink.scss";

export default function NavLink({name, href}) {
  return (
    <div className="nav-link">
        <a className="nav-link__indv" href={href}>{name}</a>
    </div>
  )
}
