export default function Home() {
  return (
    <div className="bg-white h-screen">
      <header className="flex justify-center">
        <h1 className="text-black text-5xl mt-5">Calculator</h1>
      </header>

      <div className="border-2 border-black rounded-lg text-black">
        {/* row 1, clear and delete*/}
        <div>
          <button>Clear</button>
          <button>Delete</button>
        </div>

        {/* row 2-4 will be even grids of 4*/}
        <div className="grid grid-cols-4">
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
        </div>
      </div>
    </div>
  );
}
