import Link from "next/link";

export default function Page() {

  return (
    <main>
      <h1>Dungeon Weaver</h1>
      <p>text</p>
      <Link href="character-design" className="hover:text-amber-400">Design a Character</Link>
    </main>
  );
}