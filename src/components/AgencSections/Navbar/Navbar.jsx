import logo from '../../../assets/navAssets/logo.png';
import Menu from '../CommonComponents/Menu';
import Button from '../CommonComponents/Button';
const Navbar = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <nav className='flex items-center justify-between py-[50px] absolute z-10 w-full'>
      <div className='w-[166.2px]'>
        <picture><img src={logo} alt={logo} /></picture>
      </div>
      <div>
        <Menu menuItem={menuItems}/>
      </div>
      <div>
        <Button Content={'Contact'} todo={()=>{window.alert('todo')}}/>
      </div>
    </nav>
  )
}

export default Navbar