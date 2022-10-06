import {
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  IconButton,
  Badge,
  ButtonBase,
  Avatar,
  Typography,
} from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";

const SearchBar = () => {
  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pointer-events-none text-neutral-500">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block mt-1 p-2 pl-7 w-full text-sm text-black bg-transparent dark:placeholder-gray-400 border-none outline-none"
        placeholder="Search..."
        required
      />
    </div>
  );
};

const UserMenu = () => {
  const { keycloak } = useKeycloak();

  const handleLogin = () => {
    if (keycloak.authenticated) return;
    keycloak.login();
  };

  const handleLogout = () => keycloak.logout();

  return (
    <div className="flex gap-4 items-center">
      <IconButton>
        <Badge badgeContent={2} color="error">
          <BellIcon className="w-5 h-5" />
        </Badge>
      </IconButton>
      {keycloak.authenticated ? (
        <ButtonBase
          className="flex items-center gap-2 !px-2 !py-1 !rounded-lg"
          onClick={handleLogout}
        >
          <Avatar
            sx={{ width: 32, height: 32 }}
            alt="Avatar"
            src="https://i.pravatar.cc/120"
          />
          <span className="capitalize text-sm">
            {keycloak.tokenParsed?.preferred_username}
          </span>
          <ChevronDownIcon className="w-4 h-4 text-neutral-500" />
        </ButtonBase>
      ) : (
        <ButtonBase
          className="flex items-center gap-2 !px-2 !py-1 !rounded-lg"
          onClick={handleLogin}
        >
          Login
        </ButtonBase>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="z-10 h-12 px-4 bg-white shadow-md flex items-center justify-between">
      <SearchBar />
      <UserMenu />
    </header>
  );
};

export default Header;
