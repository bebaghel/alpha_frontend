import React from "react";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../redux/slice/authSlice";
// import { useNavigate } from "react-router-dom";
import { getCSV } from "../services/api";

const Dashboard = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   dispatch(logoutUser());
  //   navigate("/login");
  // };

  const handleDownload = async () => {
  try {
    const response = await getCSV(); 

    console.log("✅ Axios response:", response);
    console.log("📦 Blob content:", response.data);
    console.log("📄 Status:", response.status);

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "blogs.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("CSV Download Failed", error);
    if (error?.response?.data) {
      const reader = new FileReader();
      reader.onload = () => {
        console.error("❌ Server response:", reader.result);
        alert(reader.result);
      };
      reader.readAsText(error.response.data);
    } else {
      alert("Something went wrong while downloading.");
    }
  }
};



  return (
    <div>
      <h2>CSV file Download</h2>
      <button onClick={handleDownload} className=" px-4 py-2 rounded ">
          download
        </button>


      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
