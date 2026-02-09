import type { ReactNode } from "react";

export type ProfileNameProps = {
  children: ReactNode;
};

function ProfileName({ children }: ProfileNameProps) {
  return (
    <h1 id="profile-name" className="profile__name">
      {children}
    </h1>
  );
}

export default ProfileName;
