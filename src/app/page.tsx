export default function Home() {
  return (
    <div className="p-8 dark:bg-slate-900 dark:text-slate-100 bg-slate-50 flex-col text-center items-center text-slate-900 h-screen flex">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-4 dark:text-slate-400" >
          A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
        </p>
        <button className="bg-sky-500 dark:text-sky-950 dark:bg-sky-400 text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">Sign in</button>
      </div>
    </div>
  )
}
