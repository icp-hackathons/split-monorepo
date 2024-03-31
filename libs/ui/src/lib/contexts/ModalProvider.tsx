import { type Dispatch, type SetStateAction, createContext, useContext, useMemo, useState } from "react";

type ModalContextType = {
  modalContext: ModalContextChildren;
  setModalContext: Dispatch<SetStateAction<ModalContextChildren>>;
};
type ModalContextChildren = React.ReactNode | null | React.ReactNode[] | null[];

const ModalContext = createContext<ModalContextType>({ modalContext: null, setModalContext: () => null });

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalContext, setModalContext] = useState<ModalContextChildren>(null);

  const providerValue = useMemo(
    () => ({
      modalContext,
      setModalContext,
    }),
    [modalContext, setModalContext],
  );

  return <ModalContext.Provider value={providerValue}>{children}</ModalContext.Provider>;
};

const useModalContext = () => useContext(ModalContext);

export { ModalContext, ModalProvider, useModalContext };
