import type { ReactElement } from "react";
import type { ProfileLinkProps } from "./ProfileLink";

export type ProfileNavLinksProps = {
  children: ReactElement<ProfileLinkProps>[];
};

function ProfileNavLinks({ children }: ProfileNavLinksProps) {
  return (
    <nav className="profile__links" aria-label="Social Links">
      {children}
    </nav>
  );
}

export default ProfileNavLinks;
