export type ProfilePictureProps = {
  src: string;
  alt?: string;
};

function ProfilePicture({ src, alt }: ProfilePictureProps) {
  return <img src={src} alt={alt} className="profile__picture" />;
}

export default ProfilePicture;
