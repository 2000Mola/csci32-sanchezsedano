export default function Navbar() {
  return (
    <nav className="flex justify-start bg-cyan-700 p-4 items-center gap-2 shadow-lg">
      <div className="justify-start text-xl">Tubular Turbines!!</div>

      <a href="/" className="ml-auto">
        <button className=" px-6 py-4 bg-blue-800 shadow-md transition-all cursor-pointer border-0 rounded-md hover:bg-lime-700 active:bg-yellow-900">
          Out of Service
        </button>
      </a>

      <a href="/about">
        <button className="bg-blue-800 gap-4 px-6 py-4 cursor-pointer transition-all shadow-md rounded-md hover:bg-lime-700 active:bg-yellow-900 ">
          Not yet
        </button>
      </a>
    </nav>
  )
}
