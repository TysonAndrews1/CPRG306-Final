import Link from "next/link";
export default function Page() {

  return (
    <main className="centered-flex-column bg-slate-400 min-h-screen">
      <h1 className="text-black text-6xl m-2 mt-5 font-bold italic">-- Dungeon Weaver --</h1>
      <div className="flex flex-col items-center justify-center m-2 p-3 rounded bg-slate-700 w-2/5">
        <div className="flex items-center justify-center rounded p-2 bg-slate-900">
          <p className="text-amber-200 text-xl text-center font-bold">
            Dungeon&nbsp;</p>
          <p className="text-purple-400 text-xl text-center font-bold">
            Weaver</p>
        </div>
        <p className="text-white text-xl text-center">
          is an online platform designed with tools that simplify the character creation process for...</p>
        <div className="flex items-center justify-center rounded p-2 bg-slate-900">
          <p className="text-red-600 text-3xl text-center font-black">
          Dungeon</p>
          <p className="text-stone-300 text-3xl text-center font-black">
          &nbsp;&&nbsp;</p>
          <p className="text-red-600 text-3xl text-center font-black">
          Dragons</p>
        </div>
        <p className="text-white text-xl text-center">
          This website would offer an efficient and creative character creation experience. 
          With customizable features and randomization options, it caters to both new and experienced players, simplifying 
          the process while enhancing imagination. The platform aims to save time, inspire creativity, and provide a streamlined 
          resource for building diverse and engaging characters.</p>
      </div>
      <Link href="character-data" className="flex items-center justify-center p-2 text-white bg-blue-500 text-3xl font-bold rounded-xl border-8 border-blue-400 hover:bg-blue-300 hover:border-blue-100">
        <div className="flex flex-col items-center justify-center">
          <p className="">Create A</p>
          <p className="">Character</p>
        </div>
      </Link>

    </main>
  );
}
