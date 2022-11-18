import Alert from "../components/layout/Alert";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <>
      <Alert />
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;
