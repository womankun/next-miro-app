const SubmitButton = () => {
  return (
    <div className="button001 mt-5 mb-10">
        <button className="bg-gray-200 rounded relative flex justify-around items-center mx-auto max-w-xs px-6 py-2.5 text-gray-800 transition ease-in-out duration-300 font-medium hover:bg-gray-800 hover:text-white">
            Submit
        <span
            className="after:content-[''] after:w-1.25 after:h-1.25
            after:rotate-45 after:translate-y-[-50%] after:absolute
            after:top-1/2 after:right-5 after:rounded after:transition
            after:ease-in-out after:duration-300 hover:after:border-white"
        >
        </span>
        </button>
    </div>
  )
}

export default SubmitButton