import Link from "next/link";

const HomeButton = () => {
  return (
    <Link
      href="/"
      aria-label="Go to home page"
      className="text-xl font-semibold"
    >
      Go home
    </Link>
  );
};

export default HomeButton;
