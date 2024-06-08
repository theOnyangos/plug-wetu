import { Link } from "react-router-dom";

const SignInComponent = ({ setIsSigning }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-slate-200 dark:bg-darken">
      <div className="w-[90%] md:w-[600px] bg-white dark:bg-dark p-5 border border-gray-300 dark:border-slate-700 rounded-md py-10 md:container md:mx-auto">
        <h1 className="text-3xl font-bold text-center dark:text-slate-100 tracking-tight mb-5 border-b border-gray-300 dark:border-slate-700 pb-5">
          Sign In
        </h1>
        <p className="text-gray-500 dark:text-slate-500 mt-2 text-sm">
          Sign in to your account to start selling and buying products from a
          variety of businesses, all under one convenient account!
        </p>

        {/* Sign In Form */}
        <form onSubmit={() => {}} className="w-full mt-5">
          {/* Email Input */}
          <div className="w-full mb-5">
            <label
              htmlFor="email"
              className="text-sm block font-bold text-dark dark:text-gray-200"
            >
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="border dark:border-slate-700 dark:text-slate-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
            />
          </div>

          {/* Password Input */}
          <div className="w-full mb-5">
            <label
              htmlFor="password"
              className="text-sm block font-bold text-dark dark:text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="border dark:border-slate-700 dark:text-slate-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
            />
          </div>

          {/* Forget password and remember me */}
          <div className="flex justify-between items-center mb-5">
            <div>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-2"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-500 dark:text-slate-500"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-primary dark:text-white"
            >
              Forgot password?
            </Link>
          </div>

          <div className="mb-5">
            <button
              type="submit"
              className="btn bg-primary text-white w-full text-lg px-5 py-2 rounded"
            >
              Sign In
            </button>
          </div>

          {/* Link to sighup */}
          <div className="mb-5">
            <p className="text-center text-gray-500 dark:text-slate-500 mt-2 text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => setIsSigning((previous) => !previous)}
                className="text-primary dark:text-white"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInComponent;
