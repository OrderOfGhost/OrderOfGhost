interface AvatarProps {
  url: string;
  alt?: string;
}

export const Avatar = ({ url, alt = 'avatar' }: AvatarProps) => (
  <img src={url} alt={alt} className="w-10 h-10 rounded-full" />
);
