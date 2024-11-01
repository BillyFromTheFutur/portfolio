import Image from "next/image";

interface Props {
  url: string;
  size?: number;
  alt?: string;
  className?: string;
}

const Avatar = ({
  url,
  size = 200, // taille par défaut
  alt = "Profile picture",
  className = "",
}: Props) => {
  return (
    <div
      className={`relative overflow-hidden rounded-full bg-gray-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={url}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-fill"
        priority={true} // Charge l'image en priorité car c'est généralement au-dessus de la fold
      />
    </div>
  );
};

export default Avatar;
