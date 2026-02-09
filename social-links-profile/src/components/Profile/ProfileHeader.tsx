import type { ReactNode } from "react";

export type ProfileHeaderProps = {
  children: ReactNode;
};

function ProfileHeader({ children }: ProfileHeaderProps) {
  return <header className="profile__header">{children}</header>;
}

export default ProfileHeader;
