import type { ReactNode } from "react";

export type ProfileNavLinksProps = {
  children: ReactNode;
};

function ProfileNavLinks({ children }: ProfileNavLinksProps) {
  return (
    <nav className="profile__links" aria-label="Social Links">
      {children}
    </nav>
  );
}

export default ProfileNavLinks;
