//import img
import iconToggle from '../../assets/icons/toggle.svg';
import iconSearch from '../../assets/icons/search.svg';
import iconCart from '../../assets/icons/cart.svg';
import iconMoon from '../../assets/icons/moon.svg';
// import iconSun from '../../assets/icons/sun.svg';
import iconLogo from '../../assets/icons/logo.svg';

export default function Header({ toggleTheme }) {
  // const openDark = (event) => {
  //   dataTheme='light'
  //   document.body.classList.add('dark');
  //   this.setState({ showModal: true });
  // };
  // hideModal = (event) => {
  //   document.body.classList.remove('modal-open');
  //   this.setState({ showModal: false });
  // };

  return (
    <>
      {/* <!-- header --> */}
      <header className='site-header'>
        <div className='header-container mx-auto'>
          {/* <!-- navbar-toggle --> */}
          <input id='navbar-toggle' className='navbar-toggle' type='checkbox' />
          <label htmlFor='navbar-toggle' className='burger-container'>
            <img
              src={iconToggle}
              alt='icon of Toggle'
              className='icon-toggle cursor-point'
            />
          </label>

          {/* <!-- navbar-menu --> */}
          <nav className='navbar-menu'>
            <ul className='nav-list site-menu-list mr-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  男款
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  女款
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  最新消息
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  客製商品
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className='nav-list site-action-list'>
              {/* <!-- search --> */}
              <li className='nav-item'>
                <img
                  src={iconSearch}
                  alt='icon of Search'
                  className='nav-icon cursor-point'
                ></img>
              </li>
              {/* <!-- cart --> */}
              <li className='nav-item'>
                <img
                  src={iconCart}
                  alt='icon of Cart'
                  className='nav-icon cursor-point'
                ></img>
              </li>
              <li id='theme-toggle' className='nav-item'>
                {/* <!-- moon --> */}
                <img
                  src={iconMoon}
                  alt='icon of Moon'
                  className='nav-icon cursor-point'
                  onClick={toggleTheme}
                ></img>
                {/* <!-- sun --> */}
                {/* <img
                  src={iconSun}
                  alt='icon of Sun'
                  className='nav-icon cursor-point'
                ></img> */}
              </li>
            </ul>
          </nav>

          {/* <!-- logo --> */}
          <a className='header-logo-container' href='#'>
            <img
              src={iconLogo}
              alt='icon of Logo'
              className='icon-logo cursor-point'
            ></img>
          </a>
        </div>
      </header>
    </>
  );
}
