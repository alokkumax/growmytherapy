import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export default function Button2({
  href,
  children,
  variant = "dark",
  className = "",
}: Props) {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-[#3d4a3d]";
  const borderColor = isLight ? "border-white" : "border-[#3d4a3d]";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 ${textColor} font-medium uppercase tracking-wide hover:opacity-70 transition-opacity duration-500 border-b ${borderColor} pb-1 ${className}`}
    >
      {children}
      <span className="group-hover:translate-x-0.5 transition-transform duration-500">
        →
      </span>
    </Link>
  );
}
