import Link from "next/link";

export const Text = ({ name }) => {
  return (
    <Link href={`/pokemon/${name}`}>
      <a className="px-4 py-0.5 bg-crimson-500 rounded active:ring active:ring-crimson-300">
        {name}
      </a>
    </Link>
  );
};
