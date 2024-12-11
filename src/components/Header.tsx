import { Link } from "@tanstack/react-router"
import Logo from "./icon/Logo"

const Header = () => {

  const headerOptions = [
    {
      key: 'services',
      title: 'Services'
    },
    {
      key: 'about-us',
      title: 'About us'
    },
    {
      key: 'contact',
      title: 'Contact'
    }
  ]
  return (
    <div className="tp-flex tp-py-6 tp-px-12 tp-justify-between tp-bg-white tp-items-center tp-border tp-border-[#E3E3E3]">
      <div>
        <Link to="/"> <Logo /></Link>
      </div>
      <div>
        <ul className="tp-flex tp-gap-[50px] tp-font-medium tp-text-sm">
          {headerOptions.map((header) => (
            <li>
              <Link to={`/${header.key}` as '/'}>{header.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Header