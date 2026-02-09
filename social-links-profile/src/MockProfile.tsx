import Profile from "./components/Profile/Profile";
import ProfileDescription from "./components/Profile/ProfileDescription";
import ProfileHeader from "./components/Profile/ProfileHeader";
import ProfileLink from "./components/Profile/ProfileLink";
import ProfileLocation from "./components/Profile/ProfileLocation";
import ProfileName from "./components/Profile/ProfileName";
import ProfileNavLinks from "./components/Profile/ProfileNavLinks";
import ProfilePicture from "./components/Profile/ProfilePicture";

function MockProfile() {
  return (
    <>
      <main className="wrapper">
        <Profile>
          <ProfileHeader>
            <ProfilePicture
              src="assets/images/avatar-jessica.jpeg"
              alt="Foto de perfil de Jessica Randall"
            />
            <ProfileName>Jessica Randall</ProfileName>
            <ProfileLocation>London, United Kingdom</ProfileLocation>
          </ProfileHeader>

          <ProfileDescription>"Front-end developer and avid reader."</ProfileDescription>

          <ProfileNavLinks>
            <ProfileLink href="https://github.com/">GitHub</ProfileLink>
            <ProfileLink href="https://www.frontendmentor.io/">Frontend Mentor</ProfileLink>
            <ProfileLink href="https://www.linkedin.com/">LinkedIn</ProfileLink>
            <ProfileLink href="https://twitter.com/">Twitter</ProfileLink>
            <ProfileLink href="https://www.instagram.com/">Instagram</ProfileLink>
          </ProfileNavLinks>
        </Profile>
      </main>
    </>
  );
}

export default MockProfile;
