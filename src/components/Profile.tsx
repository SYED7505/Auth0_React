import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = withAuthenticationRequired(() => {
  const { user, isLoading, error } = useAuth0();
  if (error) return <p>Authentication error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container d-flex flex-column align-items-center">
      <img src={user?.picture} alt="user_picture" className="user-img" />
      <h3>{user?.name}</h3>
      <h3 className="mt-3">Hi {user?.nickname}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        doloremque
      </p>
    </div>
  );
});

export default Profile;
