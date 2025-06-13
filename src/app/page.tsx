import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center">
        <Image alt="Ramiel" src="/ramiel.jpg" width={1920} height={1080} />
      </section>
      <section>
        <h1 className="text-3xl font-bold text-center">
          Adviseer&lsquo;s Website
        </h1>
        <p className="text-center">Welcome to my blog.</p>
        <h2 className="text-xl mt-2 text-center">Articles</h2>
        <ul className="list-disc text-center">
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/why-does-the-universe-simulate-itself"
            >
              Why does the universe repeat itself with a simulation?
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/baphomet"
            >
              Baphomet
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/tree-of-life"
            >
              Tree of Life
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/wise-old-man"
            >
              Wise Old Man
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/meaning-of-existence"
            >
              The Meaning of Existence
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/religious-fail-satan"
            >
              Religious fail of Satan
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/universe-is-sim"
            >
              Are We Living in a Simuatlion?
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/laplace"
            >
              Laplace's Demon
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-500 hover:text-amber-600"
              href="/laplace2"
            >
              What happens once we create Laplace's demon.
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
