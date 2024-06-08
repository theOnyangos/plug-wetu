import PropTypes from "prop-types";
import { BiArrowBack, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/UseThemeStore";

const LoginScreenComponent = ({
  isOnboarding,
  onboardingContent,
  handleGetStarted,
  currentIndex,
  handlePrevious,
  handleNext,
  handleSkip,
}) => {
  const navigate = useNavigate();
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  return (
    <>
      {isOnboarding && (
        <>
          <div className="flex flex-col items-center justify-center h-screen bg-slate-200 dark:bg-darken">
            {/* Back Icon */}
            <div
              className="absolute top-5 left-5 cursor-pointer bg-white dark:bg-dark p-3 rounded-full"
              onClick={() => navigate("/")}
            >
              <BiArrowBack className="text-2xl text-darken dark:text-slate-100" />
            </div>

            {/* Logo */}
            <div className="border flex gap-5 flex-col items-center justify-center p-5 rounded-md dark:border-slate-700 border-gray-300 bg-white dark:bg-transparent w-[90%] md:w-[600px] py-10">
              <div className="w-[200px]">
                <img
                  src={
                    isDarkMode
                      ? "/images/pw-logo-dark.png"
                      : "/images/pw-logo.png"
                  }
                  alt=""
                />
              </div>

              <div className="w-full md:w-[500px]">
                <h1 className="text-3xl font-bold text-center dark:text-cyan-500 tracking-tight leading-none">
                  {onboardingContent[currentIndex].title}
                </h1>
              </div>

              <div className="w-full md:w-[500px] border border-gray-300 bg-white dark:bg-dark dark:border-slate-700 p-3 rounded-md">
                <p className="text-center text-gray-500 dark:text-slate-200 mt-2 text-sm md:text-base">
                  {onboardingContent[currentIndex].description}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="w-full md:w-[500px] flex gap-3 items-center justify-between">
                {currentIndex === 0 && (
                  <button
                    onClick={handleSkip}
                    className="btn bg-slate-500 text-white w-full text-lg px-5 py-2 rounded"
                  >
                    Skip
                  </button>
                )}
                {currentIndex > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="btn bg-primary text-white w-full text-lg px-5 py-2 rounded flex justify-center items-center gap-2"
                  >
                    <BiLeftArrowAlt />
                    Previous
                  </button>
                )}
                {currentIndex < onboardingContent.length - 1 && (
                  <button
                    onClick={handleNext}
                    className="btn bg-primary text-white w-full text-lg px-5 py-2 rounded flex justify-center items-center gap-2"
                  >
                    Next
                    <BiRightArrowAlt />
                  </button>
                )}
                {currentIndex === onboardingContent.length - 1 && (
                  <button
                    onClick={handleGetStarted}
                    className="btn bg-darken dark:bg-slate-200 dark:text-darken text-white w-[100%] text-lg px-5 py-2 md:py-3 rounded"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

LoginScreenComponent.propTypes = {
  isOnboarding: PropTypes.bool.isRequired,
  onboardingContent: PropTypes.array.isRequired,
  handleGetStarted: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleSkip: PropTypes.func.isRequired,
};

export default LoginScreenComponent;
