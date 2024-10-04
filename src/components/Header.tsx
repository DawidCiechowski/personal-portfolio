import Nav from "./Nav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="tw-py-8 xl:tw-py-10 tw-text-text-color">
      <div className="tw-container tw-mx-auto tw-flex tw-justify-between tw-items-center">
        <Logo></Logo>
        {/* <i className='bx bx-menu' id="menu-icon"></i> */}

        <div className="tw-hidden xl:tw-flex tw-items-center tw-gap-8">
          <Nav />
        </div>

        <div className="xl:tw-hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
