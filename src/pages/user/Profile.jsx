import PasswordForm from "../../featuers/auth/UpdatePasswordForm";
import UserDataForm from "../../featuers/auth/UpdateUserDataForm";

function Profile() {
  return (
    <div className="flex flex-col gap-8">
      <UserDataForm />
      <PasswordForm />
    </div>
  );
}

export default Profile;
