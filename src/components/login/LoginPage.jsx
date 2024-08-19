import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URI, AUTH_HEADER } from "../../services/constants";
import * as Yup from "yup";
import { CgMail } from "react-icons/cg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Profile from "../../Profile";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [otp, setOtp] = useState(""); // State for OTP
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });
  const handleLogin = async () => {
    setIsLoading(true);
    const item = { email, password };
    try {
      const response = await fetch(`${API_BASE_URI}login/`.replace(/^http:/, "https:"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        localStorage.setItem("access_token", result.access);
        AUTH_HEADER.Authorization = `Bearer ${result.access}`;
        setIsSuccess(true);
        await Swal.fire({
          title: "Login Successful",
          text: "You are now logged in.",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || "An error occurred. Please try again later."
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    setUser(response);
    try {
      // Register user
      const registerResponse = await axios.post(
        "http://136.228.158.126:50001/api/register/",
        { email: response.profileObj.email }
      );

      // Assuming the API sends an OTP to the user's email
      const otpResponse = await axios.post(
        "http://136.228.158.126:50001/api/verify-otp/",
        { otp }
      );

      if (otpResponse.status === 200) {
        // Log in the user
        const loginResponse = await axios.post(
          "http://136.228.158.126:50001/api/login/",
          { email: response.profileObj.email, otp }
        );

        localStorage.setItem("user-info", JSON.stringify(loginResponse.data));
        AUTH_HEADER.Authorization = `Bearer ${loginResponse.data.access_token}`;
        setProfile(loginResponse.data.profile);
        setIsSuccess(true);
        await Swal.fire({
          title: "Login Successful",
          text: "You are now logged in.",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/");
      } else {
        await Swal.fire({
          title: "Verification Failed",
          text: "OTP verification failed. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Google Login Failed:", error);
      Swal.fire({
        title: "Login Failed",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: (error) => {
      console.log("Login Failed:", error);
      Swal.fire({
        title: "Login Failed",
        text: "Google login failed. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  const logOut = () => {
    googleLogout();
    setProfile();
  };
  return (
    <>
      {isSuccess ? (
        <div className="font-suwannaphum">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="grid items-center gap-4 max-w-6xl w-full p-4 m-4  shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
              <div className="w-full px-4 py-4">
                <h3 className="text-blue-700 text-3xl font-extrabold text-center">
                  You have successfully logged in!
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-suwannaphum ">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg  bg-gray-50 border-gray-950">
              <div className="md:max-w-md w-full px-4 py-4">
                <form>
                  <div className="mb-3">
                    <h3 className="text-blue-700 text-3xl font-extrabold text-center">
                      ចូលគណនី
                    </h3>
                    <p className="text-lg mt-4 font-suwannaphum text-gray-800 text-center">
                      មិនទាន់មានគណនី?{" "}
                      <Link
                        to="/register"
                        className="text-blue-600 text-lg font-suwannaphum font-semibold hover:underline ml-1 whitespace-nowrap"
                      >
                        បង្កើតគណនី
                      </Link>
                    </p>
                    <section className="w-20 h-20 mx-auto rounded-full mt-4 overflow-hidden">
                      <img src="../src/assets/STEM_TOTUR.jpg" alt="STEM Tutorial" className="w-full h-full object-cover" />
                    </section>

                  </div>

                  <div>
                    <label className="text-gray-800 text-[18px] block mb-2">
                      អុីម៉ែល
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="email"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm border-b focus:border-blue-600 px-2 py-3 outline-none"
                        placeholder="បញ្ចូលអុីមែល"
                      />
                      <div className="w-[18px] h-[18px] absolute right-2 text-black">
                        <CgMail />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <label className="text-gray-800 text-[18px] block mb-2">
                      លេខសម្ងាត់
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full rounded-[15px] text-black text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        placeholder="បញ្ចូលពាក្យសម្ងាត់"
                      />
                      <div
                        className="w-[18px] h-[18px] absolute right-2 text-black cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4 mb-8 font-suwannaphum">
                    <label>
                      <input
                        type="checkbox"
                        className="text-blue-700 text-lg font-suwannaphum accent-blue-600 mr-2 "
                      />
                      ចងចាំខ្ញុំ
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-md text-blue-600 hover:underline"
                    >
                      ភ្លេចលេខសំងាត់?
                    </Link>
                  </div>
                  {errorMessage && (
                    <div className="mb-4 text-red-500 text-sm">
                      {errorMessage}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full bg-blue-700 text-white py-3 rounded-[15px] font-semibold text-[16px] shadow-sm hover:bg-blue-600 transition-all duration-300 ease-in-out"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "បញ្ចូល"}
                  </button>
                  <button
                    type="button"
                    onClick={() => login()}
                    className="w-full bg-red-700 text-white py-2 rounded-[15px] font-semibold text-[16px] shadow-sm hover:bg-red-600 transition-all duration-300 ease-in-out mt-4"
                  >
                    Login with Google
                  </button>
                </form>
              </div>
              <div>
                <img
                  className="w-full max-h-[600px] object-cover"
                  src="../src/assets/Tablet login.gif"
                  alt="login"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
