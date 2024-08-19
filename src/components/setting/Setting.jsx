import { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import axios from "axios";
import { AUTH_HEADER } from "../../services/constants";
import { Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";

const Setting = () => {
  const [profileData, setProfileData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    dob: "",
    last_name: "",
    username: "",
    email: "",
    address: "",
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = formData.image;
      if (formData.image) {
        const imageFormData = new FormData();
        imageFormData.append("file", formData.image);
        const imageResponse = await axios.post(
          "http://136.228.158.126:50001/api/upload/",
          imageFormData,
          {
            headers: {
              ...AUTH_HEADER,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        imageUrl = imageResponse.data.url;
      }

      const updatedFormData = {
        ...formData,
        image: imageUrl,
      };

      const response = await axios.put(
        "http://136.228.158.126:50001/api/profile/",
        updatedFormData,
        {
          headers: {
            ...AUTH_HEADER,
            "Content-Type": "application/json",
          },
        }
      );

      setProfileData(response.data);
      setSuccessMessage("Profile updated successfully!");
      setErrorMessage("");

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your profile has been updated.",
      });
    } catch (error) {
      console.error(error.response?.data);
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === "Username already exists"
      ) {
        setErrorMessage(
          "Username already exists. Please choose a different username."
        );
        setSuccessMessage("");
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Username already exists. Please choose a different username.",
        });
      } else {
        setErrorMessage("An error occurred while updating your profile.");
        setSuccessMessage("");
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An error occurred while updating your profile.",
        });
      }
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://136.228.158.126:50001/api/profile/",
          {
            headers: {
              ...AUTH_HEADER,
              "Content-Type": "application/json",
            },
          }
        );
        setProfileData(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
        setErrorMessage("An error occurred while fetching your profile data.");
        setSuccessMessage("");
      }
    };

    fetchProfileData();
  }, []);


  return (
    <>
      <Dashboard />
      <section className="section main-section w-[80%] ml-[16%] sm:ml-[14%] md:ml-[22%] lg:ml-[20%] xl:ml-[18%] mt-7 px-4">
        <div className="profile-container  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card w-full">
            <header className="card-header">
              <p className="card-header-title font-suwannaphum flex items-center text-black">
                <span className="icon mr-2">👤</span>
                Edit Profile
              </p>
            </header>
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <div className="field font-suwannaphum">
                  <div className="field-body">
                    <div className="field file">
                      <label className="upload control rounded-lg flex flex-col items-center justify-center md:flex-row md:justify-center md:space-x-4">
                        <input
                          type="file"
                          id="image"
                          name="image"
                          className="w-full md:w-auto text-[16px] md:text-base lg:text-lg"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-[20px] mb-4">
                  <div className="mb-2 block font-suwannaphum">
                    <Label
                      className="text-[20px]"
                      htmlFor="text"
                      value="នាមត្រកូល"
                    />
                  </div>
                  <TextInput
                    className="font-suwannaphum"
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលនាមត្រកូល"
                  />
                </div>
                <div className="text-[20px] mb-4">
                  <div className="mb-2 block font-suwannaphum">
                    <Label
                      className="text-[20px]"
                      htmlFor="text"
                      value="បញ្ចូលនាមខ្លួន"
                    />
                  </div>
                  <TextInput
                    className="font-suwannaphum"
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលនាមខ្លួន"
                  />
                </div>
                <div className="text-[23px] mb-4">
                  <div className="mb-2 block font-suwannaphum">
                    <Label
                      className="text-[20px]"
                      htmlFor="text"
                      value="ឈ្មោះ"
                    />
                  </div>
                  <TextInput
                    className="font-suwannaphum"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលឈ្មោះ"
                  />
                </div>
                <div className="text-[20px] font-suwannaphum mb-4">
                  <div className="mb-2 block font-suwannaphum">
                    <Label
                      className="text-[20px]"
                      htmlFor="email"
                      value="អុីមែល"
                    />
                  </div>
                  <TextInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលអុីមែល"
                  />
                </div>


                <div className="text-[20px] font-suwannaphum mb-4">
                  <div className="mb-2 block font-suwannaphum">
                    <Label
                      className="text-[20px]"
                      htmlFor="text"
                      value="ថ្ងៃខែឆ្នាំកំណើត"
                    />
                  </div>
                  <TextInput
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលថ្ងៃខែឆ្នាំកំណើត"
                  />
                </div>
                <div className="text-[20px] mb-4">
                  <div className="mb-2 block font-suwannaphum">
                    <Label
                      className="text-[20px]"
                      htmlFor="text"
                      value="អាស័យដ្ឋាន"
                    />
                  </div>
                  <TextInput
                    className="font-suwannaphum"
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលអាស័យដ្ឋាន"
                  />
                </div>
                <div className="field font-suwannaphum">
                  <div className="control">
                    <button
                      type="submit"
                      className="text-[16px] button submit-button md:font-suwannaphum"
                    >
                      បញ្ចូន
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card w-full">
          <header className="card-header bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <span className="text-xl text-blue-600 mr-3" aria-hidden="true">
                👥
              </span>
              <p className="text-xl font-semibold text-gray-800">
                Profile
              </p>
            </div>
          </header>
            {profileData ? (
              <div>
                <div className="card-content h-[250px] flex justify-center items-center">
                  <div className="relative flex justify-center items-center">
                  <div className="w-40 h-40 bg-blue-500 rounded-full flex justify-center items-center">
                      <img
                        src={
                          profileData.image ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s"
                        }
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-[#16A1DF]"
                      />
                    </div>

                  </div>
                </div>
                <span className="font-suwannaphum text-[14px] text-center mx-9 xl:text-[20px] text-gray-900 font-medium">
                  ព័ឥមានរបស់អ្នកប្រើប្រាស់
                </span>
                <div className="w-full p-4">
                  <ul className="space-y-2 font-suwannaphum mx-auto">
                    <li className="flex justify-between ">
                      <span className="text-sm lg:text-lg xl:text-xl">នាមត្រកូល</span>
                      <span className="text-sm lg:text-lg xl:text-xl">{profileData.first_name}</span>
                    </li>
                    <li className="flex justify-between">
                      <span  className="text-sm lg:text-lg xl:text-xl">នាមខ្លួន</span>
                      <span  className="text-sm lg:text-lg xl:text-xl">{profileData.last_name}</span>
                    </li>
                    <li className="flex justify-between">
                      <span  className="text-sm lg:text-lg xl:text-xl">អាស័យដ្ឋាន</span>
                      <span  className="text-sm lg:text-lg xl:text-xl">{profileData.address}</span>
                    </li>
                    <li className="flex justify-between">
                      <span  className="text-sm lg:text-lg xl:text-xl">ឈ្មោះ</span>
                      <span  className="text-sm lg:text-lg xl:text-xl">{profileData.username}</span>
                    </li>
                    <li className="flex justify-between">
                      <span  className="text-sm lg:text-lg xl:text-xl">អុីមែល</span>
                      <span  className="text-sm lg:text-lg xl:text-xl">{profileData.email}</span>
                    </li>


                    <li className="flex justify-between">
                      <span  className="text-sm lg:text-lg xl:text-xl">ថ្ងៃខែឆ្នាំកំណើត</span>
                      <span  className="text-sm lg:text-lg xl:text-xl">{profileData.dob}</span>
                    </li>
                    {successMessage && (
                      <div className="success-message text-blue-600 text-sm lg:text-lg xl:text-xl">
                        {successMessage}
                      </div>
                    )}
                    {errorMessage && (
                      <div className="error-message text-red-600">
                        {errorMessage}
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
