import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from "../firebase";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";

function Join() {

  // ✅ State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    enrollment: "",
    skill: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [recruitmentOpen, setRecruitmentOpen] = useState(false);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Fetch recruitment status from Firebase
  useEffect(() => {
    const fetchStatus = async () => {
      const docRef = doc(db, "settings", "recruitment");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRecruitmentOpen(docSnap.data().recruitmentOpen);
      }
    };

    fetchStatus();
  }, []);

  // ✅ Submit to Firestore
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "applications"), formData);
    setSubmitted(true);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24">
      
      <Navbar />

      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
        Join the Club
      </h1>

      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
        
        {recruitmentOpen ? (
          submitted ? (
            <h2 className="text-green-400 text-center text-xl">
              ✅ Application Submitted!
            </h2>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full p-3 rounded bg-black/50 border border-white/10"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 rounded bg-black/50 border border-white/10"
                required
              />

              <input
                type="text"
                name="department"
                placeholder="Department"
                onChange={handleChange}
                className="w-full p-3 rounded bg-black/50 border border-white/10"
                required
              />

              <input
                type="text"
                name="enrollment"
                placeholder="Enrollment Number"
                onChange={handleChange}
                className="w-full p-3 rounded bg-black/50 border border-white/10"
                required
              />

              <select
                name="skill"
                onChange={handleChange}
                className="w-full p-3 rounded bg-black/50 border border-white/10"
                required
              >
                <option value="">Select Team</option>
                <option>Visual Arts Team</option>
                <option>Photography Team</option>
                <option>Graphics Design Team</option>
                <option>Social Media Management</option>
                <option>Content Writing</option>
                <option>PR Team</option>
                <option>Technical Team</option>
              </select>

              <textarea
                name="reason"
                placeholder="Why do you want to join?"
                onChange={handleChange}
                className="w-full p-3 rounded bg-black/50 border border-white/10"
                rows="4"
                required
              />

              <button
                type="submit"
                className="w-full py-3 rounded bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-black font-semibold hover:scale-105 transition"
              >
                Submit Application
              </button>

            </form>
          )
        ) : (
          <div className="text-center p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-lg">
            
            <h2 className="text-2xl font-bold text-red-400">
              🚫 Recruitment Closed
            </h2>

            <p className="text-gray-400 mt-3">
              We are not accepting applications right now.
            </p>

            <p className="text-gray-500 mt-2 text-sm">
              Please check back later.
            </p>

          </div>
        )}

      </div>
      <div className="max-w-3xl mx-auto mt-12">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9FWu5mA-zF7sQIbApKktpD2Ta7FFG9eLKz6AwO6fqc51TjQ/viewform?embedded=true" width="640" height="1289" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>
    </div>
  );
}

export default Join;