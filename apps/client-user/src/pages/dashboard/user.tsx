import RegisterProducts from "../../components/Register/RegisterProducts/RegisterProducts";

export const User = () => {
  return (
    <div>
      <h1>User</h1>
      <RegisterProducts step={1} />
      <RegisterProducts step={2} />
      <RegisterProducts step={3} />
      <RegisterProducts step={4} />
    </div>
  );
};

export default User;
