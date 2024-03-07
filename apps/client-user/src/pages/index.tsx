import clsx from "clsx";
import MetamaskIcon from "~/client-user/public/shared/icons/MetamaskIcon.png";
import NetworkDropdown from "../components/Register/NetworkDropdown/NetworkDropdown";

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <div className={clsx("flex flex-col items-center gap-2")}>
      <NetworkDropdown
        className="w-[200px]"
        options={[
          { value: "chocolate", label: "Chocolate", icon: MetamaskIcon },
          { value: "strawberry", label: "Strawberry", icon: MetamaskIcon },
          { value: "vanilla", label: "Vanilla", icon: MetamaskIcon },
        ]}
        onNetworkSelect={(option) => {
          console.log(option.value);
        }}
      />
    </div>
  );
};

export default Index;
