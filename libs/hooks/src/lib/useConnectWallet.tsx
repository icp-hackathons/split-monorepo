import { useCallback, useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import { useAccount, useConnect, useDisconnect, useNetwork, useSignMessage } from "wagmi";
import { AuthTokenManager, useAuth, useRequestLogin, useVerifyLogin } from "@split/graphql";

export enum InternalLoginState {
  NOT_STARTED = "not_started",
  PROGRESS = "progress",
  DONE = "done",
}

export enum WalletType {
  METAMASK = "metamask",
  NEOPIN = "neopin",
}

export const useConnectWallet = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { setIsAuthenticated } = useAuth();
  const { signMessageAsync } = useSignMessage();

  const [internalLoginState, setInternalLoginState] = useState<InternalLoginState>(InternalLoginState.NOT_STARTED);

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

  const handleConnect = (walletType: WalletType) => {
    setInternalLoginState(InternalLoginState.PROGRESS);
    try {
      if (walletType === WalletType.NEOPIN) {
        const neopinConnector = connectors[1];
        connect({ connector: neopinConnector });
      } else if (walletType === WalletType.METAMASK) {
        const metamaskConnector = connectors[0];
        connect({ connector: metamaskConnector });
      } else {
        throw Error();
      }
    } catch (error) {
      console.log(error);
      setInternalLoginState(InternalLoginState.NOT_STARTED);
    }
  };

  const handleDisconnect = useCallback(() => {
    disconnect();
    setInternalLoginState(InternalLoginState.NOT_STARTED);
    setIsAuthenticated(false);
    AuthTokenManager.removeToken();
  }, [disconnect, setIsAuthenticated]);

  const login = useCallback(async () => {
    try {
      const chainId = chain?.id;
      if (!address || !chainId) return;

      // 1. 서버에 로그인 요청
      const { data: requestLoginData } = await requestLogin({ variables: { input: { address } } });
      const nonce = requestLoginData?.requestLogin.nonce;

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

      // 3. 해당 메시지 및 서명으로 로그인 수행, JWT 토큰 가져와서 저장
      const { data: verifyLoginData } = await verifyLogin({
        variables: { input: { message: message.toMessage(), signature } },
      });
      const token = verifyLoginData?.verifyLogin;
      if (token) {
        AuthTokenManager.setToken(token, {});
      }

      // 4. 상태 변경
      setInternalLoginState(InternalLoginState.DONE);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      handleDisconnect();
    }
  }, [address, chain, requestLogin, verifyLogin, signMessageAsync, setIsAuthenticated, handleDisconnect]);

  useEffect(() => {
    if (address && internalLoginState === InternalLoginState.PROGRESS) {
      login();
    }
  }, [address, internalLoginState, login]);

  return { address, chain, handleConnect, handleDisconnect };
};
