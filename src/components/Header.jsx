import { auth } from "../app/firebase";
import { useScreenWidth } from "../app/hooks";
import { useStore } from "../app/store";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";

const Header = () => {
  const screenWidth = useScreenWidth();
  const { user } = useStore();

  return (
    <header>
      <h1>🐉 My Posts List</h1>

      {!user ? (
        <button
          className="btn secondary"
          onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
        >
          {screenWidth < 548 ? (
            <IoLogInOutline aria-label="Sign In With Google" />
          ) : (
            "Sign In With Google"
          )}
        </button>
      ) : (
        <div className="user-bar">
          <figure className="user-info">
            {screenWidth > 548 && (
              <>
                <figcaption>{user?.username}</figcaption>
                <img src={user?.avatar} alt={`Profile of ${user?.username}`} />
              </>
            )}
          </figure>
          <button className="btn danger" onClick={() => signOut(auth)}>
            {screenWidth < 548 ? (
              <IoLogOutOutline aria-label="Sign Out" />
            ) : (
              "Sign Out"
            )}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
