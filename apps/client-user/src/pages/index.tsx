import { useModalContext } from "@split/ui";
import { Header } from "../layouts/Common/Header/Header";
import { Landing } from "../layouts/Landing/Landing";

export const Home = () => {
  const { modalContext } = useModalContext();
  return (
    <>
      {modalContext}
      <div className="flex h-full w-full flex-col">
        <Header />
        <Landing />
      </div>
    </>
  );
};

export default Home;
