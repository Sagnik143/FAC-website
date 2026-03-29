import Navbar from "../components/Navbar";
import TeamRow from "../components/TeamRow";

function Team() {

  const founders = [
    {
      name: "Krish",
      role: "Founder",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Aman",
      role: "Co-Founder",
      image: "https://via.placeholder.com/150"
    },
  ];

  const executives = [
    {
      name: "Riya",
      role: "Event Head",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Rahul",
      role: "Design Lead",
      image: "https://via.placeholder.com/150"
    },
  ];

  const members = [
    {
      name: "Ankit",
      role: "Member",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Sneha",
      role: "Member",
      image: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24">
      
      <Navbar />

      <TeamRow title="Founders" members={founders} />
      <TeamRow title="Executives" members={executives} />
      <TeamRow title="Core Members" members={members} />

    </div>
  );
}

export default Team;