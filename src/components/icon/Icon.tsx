import type { IconName } from "../../types/types";

const icons = import.meta.glob("../../assets/icons/icon-*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const matchedKey = Object.keys(icons).find((key) =>
    key.includes(`icon-${name}.svg`)
  );

  if (!matchedKey) {
    console.warn(`Icon '${name}' not found.`);
    return null;
  }

  const src = icons[matchedKey];

  return (
    <img
      src={src}
      alt={`${name} icon`}
      className={`min-w-4 min-h-4 ${className}`}
      {...props}
    />
  );
};

export default Icon;
