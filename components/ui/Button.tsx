import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<"a">; // 👈 allow all anchor props

export default function Button({
  href,
  children,
  showArrow = true,
  className = "",
  ...props // 👈 capture extra props like data-aos
}: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-bg-main)] border border-[#3d4a3d] text-[#3d4a3d] font-medium text-lg hover:bg-[#3d4a3d] hover:text-white transition-colors duration-500 ${className}`}
      {...props} // 👈 forward them here
    >
      {children}
      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:translate-x-0.5 transition-transform duration-500"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}
