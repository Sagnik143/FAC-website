import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


function Join() {

  // // ✅ State
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   department: "",
  //   enrollment: "",
  //   skill: "",
  //   reason: "",
  // });

  // const [submitted, setSubmitted] = useState(false);
  // const [recruitmentOpen, setRecruitmentOpen] = useState(false);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24">
      
      <Navbar />

      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
        Join the Club
      </h1>
 
 {/* < Here you should paste the google form iframe code >
 < ||||||||||||||||||||||||||||||||||||||||||||||||| >
*/}
      <div className="max-w-3xl mx-auto mt-12">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9FWu5mA-zF7sQIbApKktpD2Ta7FFG9eLKz6AwO6fqc51TjQ/viewform?embedded=true" width="640" height="1289" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>
 {/* < ||||||||||||||||||||||||||||||||||||||||||||||||| >
 < VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV >  */}
    </div>
  );
}

export default Join;