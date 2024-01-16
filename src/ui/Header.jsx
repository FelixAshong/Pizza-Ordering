import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <div className=" bg-green-400">
      <header className="container mx-auto flex items-center justify-between border-b border-stone-200  px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="tracking-widest">
          <b>Fast Pizza</b>
        </Link>
        <SearchOrder />
        <Username />
      </header>
    </div>
  );
}

export default Header;
