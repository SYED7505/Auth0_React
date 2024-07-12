import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
  const navigate = useNavigate();

  const onRedirectCallBack = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallBack}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
