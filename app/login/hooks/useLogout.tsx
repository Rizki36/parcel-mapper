import Cookies from "js-cookie";

const useLogout = () => {
  const logout = async () => {
    Cookies.remove("token");
    window.location.reload();
  };

  return { logout };
};

export default useLogout;
