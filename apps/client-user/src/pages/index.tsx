import clsx from "clsx";
import { Button, TextField } from "@split/ui";

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <div className={clsx("flex flex-col items-center gap-2")}>
      <Button description="Text Button" />
      <TextField label="Text Field" error="This is error message" />
      <TextField
        label="Text Field"
        tooltip="This is tooltip message. This is tooltip message. This is tooltip message."
        error="This is error message"
      />
    </div>
  );
};

export default Index;
