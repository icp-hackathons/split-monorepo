import { Header } from "../layouts/Common/Header/Header";
import { Landing } from "../layouts/Landing/Landing";

export const Home = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <Landing />
    </div>
  );
};

export default Home;
