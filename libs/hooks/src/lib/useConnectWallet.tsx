import { useCallback, useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import { useAccount, useConnect, useDisconnect, useNetwork, useSignMessage } from "wagmi";
import { useRequestLogin, useVerifyLogin } from "@split/graphql";

export enum LoginState {
  NOT_STARTED = "not_started",
  PROGRESS = "progress",
  DONE = "done",
}

export const useConnectWallet = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();

  const [loginState, setLoginState] = useState<LoginState>(LoginState.NOT_STARTED);

  // TODO: Snack 추가
  const [requestLogin] = useRequestLogin({
    onCompleted: () => {
      console.log("success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [verifyLogin] = useVerifyLogin({
    onCompleted: () => {
      console.log("success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleConnect = () => {
    setLoginState(LoginState.PROGRESS);
    try {
      const metamaskConnector = connectors[0];
      connect({ connector: metamaskConnector });
    } catch (error) {
      console.log(error);
      setLoginState(LoginState.NOT_STARTED);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setLoginState(LoginState.NOT_STARTED);
  };

  const login = useCallback(async () => {
    try {
      const chainId = chain?.id;
      if (!address || !chainId) return;

      // 1. 서버에 로그인 요청
      const { data } = await requestLogin({ variables: { input: { address } } });
      const nonce = data?.requestLogin.nonce;

      // 2. 메시지 및 서명 생성
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Login to SPLIT",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce,
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      // 3. 해당 메시지 및 서명으로 로그인 수행, JWT 토큰 가져옴
      await verifyLogin({ variables: { input: { message: message.toMessage(), signature } } });

      setLoginState(LoginState.DONE);
    } catch (error) {
      console.log(error);
      setLoginState(LoginState.NOT_STARTED);
    }
  }, [address, chain, requestLogin, verifyLogin, signMessageAsync]);

  useEffect(() => {
    if (address && loginState === LoginState.PROGRESS) {
      login();
    }
  }, [address, loginState, login]);

  return { address, chain, handleConnect, handleDisconnect };
};
