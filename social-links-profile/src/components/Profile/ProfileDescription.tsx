import type { ReactNode } from "react";

export type ProfileDescriptionProps = {
  children: ReactNode;
};

function ProfileDescription({ children }: ProfileDescriptionProps) {
  return <p className="profile__description">{children}</p>;
}

export default ProfileDescription;
