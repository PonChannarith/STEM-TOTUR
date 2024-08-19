import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const navigate = useNavigate();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
          "Password must contain one uppercase, one lowercase, one number, and one special case character"
        )
        .required("Password is required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://136.228.158.126:50001/api/register/",
          values
        );

        if (response.status === 201) {
          Swal.fire({
            title: "Registration Successful",
            text: "You are now registered.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => navigate("/otp"));
        } else {
          Swal.fire({
            title: "Registration Failed",
            text: "Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: error.message || "An error occurred while submitting the form.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="font-suwannaphum">
      <div className="flex flex-col items-center justify-center p-6">
        <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
          <form onSubmit={formik.handleSubmit} className="lg:max-w-md w-full">
            <h3 className="text-blue-600 text-2xl font-suwannaphum font-semibold mb-3 text-center">
              បង្កើតគណនី
            </h3>
            <section className="w-20 h-20 mx-auto rounded-full mt-4 overflow-hidden">
              <img src="../src/assets/STEM_TOTUR.jpg" alt="STEM Tutorial" className="w-full h-full object-cover" />
            </section>
            <div className="space-y-3">
              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="first_name">
                  នាមត្រកូល
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="font-suwannaphum bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="បញ្ចូលនាមត្រកូល"
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                  <div className="text-red-600 text-sm">{formik.errors.first_name}</div>
                ) : null}
              </div>

              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="last_name">
                  នាមខ្លួន
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="បញ្ចូលនាមខ្លួន"
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <div className="text-red-600 text-sm">{formik.errors.last_name}</div>
                ) : null}
              </div>

              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="username">
                  ឈ្មោះ
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="បញ្ចូលឈ្មោះ"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-600 text-sm">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="relative">
                <label className="text-[20px] font-suwannaphum" htmlFor="email">
                  អ៊ីមែល
                </label>
                <div className="relative mt-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm cursor-pointer py-3 focus:bg-transparent outline-blue-500 transition-all"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="បញ្ចូលអ៊ីមែល"
                  />
                  <CgMail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-900" />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="relative mt-3">
                <label className="text-[20px] font-suwannaphum" htmlFor="password">
                  លេខសម្ងាត់
                </label>
                <div className="relative mt-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm py-3 focus:bg-transparent outline-blue-500 transition-all"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="បញ្ចូលលេខសម្ងាត់"
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-800 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600 text-sm">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="relative mt-3">
                <label className="text-[20px] font-suwannaphum" htmlFor="confirm_password">
                  បញ្ចាក់ពាក្យសម្ងាត់
                </label>
                <div className="relative mt-3">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm_password"
                    name="confirm_password"
                    className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm py-3 focus:bg-transparent outline-blue-500 transition-all"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="បញ្ចូលពាក្យសម្ងាត់"
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-800 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                {formik.touched.confirm_password && formik.errors.confirm_password ? (
                  <div className="text-red-600 text-sm">{formik.errors.confirm_password}</div>
                ) : null}
              </div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  ខ្ញុំទទួលយក{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    ខ្ញុំទទួលយកលក្ខខណ្ឌ
                  </a>
                </label>
              </div>
            </div>
              
            <div className="mt-12">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                {formik.isSubmitting ? "Submitting..." : "បង្កើតគណនី"}
              </button>
            </div>
            <p className="text-sm text-gray-800 mt-6 font-suwannaphum">
              មានគណនីហើយមែនទេ?{" "}
              <a
                href="/login"
                className="text-blue-600 font-semibold hover:underline ml-1 font-suwannaphum"
              >
                ចូលគណនី
              </a>
            </p>
          </form>
          <img
            src="../src/assets/Sign up (3).gif"
            className="h-full w-full max-lg:mt-12 object-cover"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
