import type { ReactNode } from "react";

export type ProfileLocationProps = {
  children: ReactNode;
};

function ProfileLocation({ children }: ProfileLocationProps) {
  return (
    <p className="profile__local">
      <strong>{children}</strong>
    </p>
  );
}

export default ProfileLocation;
