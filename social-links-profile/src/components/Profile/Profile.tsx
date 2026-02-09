import type { ReactNode } from "react";

export type ProfileProps = {
  children: ReactNode;
};

function Profile({ children }: ProfileProps) {
  return (
    <article className="profile" aria-labelledby="profile-name">
      {children}
    </article>
  );
}

export default Profile;
