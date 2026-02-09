import type { ReactNode } from "react";

export type ProfileLinkProps = {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: ReactNode;
};

function ProfileLink({ children, href, target }: ProfileLinkProps) {
  return (
    <a className="links__link" href={href} target={target ?? "_blank"} rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ProfileLink;
