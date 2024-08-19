import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Otp = () => {
  const [formData, setFormData] = useState({
    otp_code: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://136.228.158.126:50001/api/verify-otp/",
        formData
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "OTP verified successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/login");
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: response.data.message || "OTP verification failed.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "An error occurred while verifying the OTP.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-suwannaphum min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-6 border">
        <h2 className="text-center font-bold text-[35px] text-blue-600">
          Verify OTP
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="otp_code"
            >
              OTP Code:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="otp_code"
              name="otp_code"
              value={formData.otp_code}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800"
              href="#"
            >
              Resend OTP
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
