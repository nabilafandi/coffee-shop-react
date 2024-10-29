const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
      <div className="bg-offWhite rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl text-center font-mogena mb-4">Log In</h2>
        <form>
          <div className="mb-4">
            <input
              type="username"
              id="username"
              required
              placeholder="Username"
              className="w-full p-2 border bg-offWhite border-trippicalBlack rounded-xl focus:outline-none focus:ring placeholder:font-mogena placeholder:text-trippicalBlack font-mogena"
            ></input>
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              required
              placeholder="Password"
              className="w-full p-2 border bg-offWhite border-trippicalBlack rounded-xl focus:outline-none focus:ring placeholder:font-mogena placeholder:text-trippicalBlack  "
            ></input>
          </div>

          <div className="flex items-center justify-between mb-4"></div>
          <button
            type="submit"
            className="w-full bg-logoRed text-white p-2 rounded-xl hover:bg-blue-500 transition duration-200"
          >
            LOG IN
          </button>
        </form>
        {/* <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:underline"
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default SignInModal;
