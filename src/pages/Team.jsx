import Navbar from "../components/Navbar";
import TeamRow from "../components/TeamRow";

function Team() {
 

  const Advisor = [
    {
      name: "Hrishikesh Munde",
      role: "Club Advisor",
      image: "/Hrishi Bhaiya.jpeg"
    },
    {
      name: "Baishali Paul",
      role: "Club Advisor",
      image: "/Baisali didi.jpeg"
    },
     {
      name: "Prathamesh Shitre",
      role: "Club Advisor",
      image: "/Prathamesh Bhaiya.jpeg"
    },
  ];

  const executives = [
    {
      name: "Kamlesh Kumar Baitha",
      role: "President",
      image: "/kamlesh kumar.jpeg"
    },
    {
      name: "Debajit Datta",
      role: "Vice President",
      image: "/Debajit VC.jpeg"
    },
     {
      name: "Jagjeet Singh",
      role: "Techinical Lead",
      image: "/Jagjeet singh.jpeg"
    },
     {
      name: "Abhik Bhattacharjee",
      role: "Head of operations",
      image: "/Abhik Bhattacharjee.jpeg"
    },
      {
      name: "Tushar Bhoumik",
      role: "Event coordinator",
      image: "/Tushar.jpeg"
    },
      {
      name: "Arya R",
      role: "General Secretary",
      image: "/Arya.jpeg"
    },
      {
      name: "Dipshika Sarkar",
      role: "Assistant General Secretary",
      image: "/Dipshika.jpeg"
    },
        {
      name: "Raima Choudhury",
      role: "Assistant General Secretary",
      image: "/Raima.jpeg"
    },
        {
      name: "Shyantika Saha",
      role: "Management Lead",
      image: "/Shayantika.jpeg"
    },
  ];

  const members = [
    {
      name: "Payel Das",
      role: "Visual Arts Lead",
      image: "/payal.png"
    },
    {
      name: "Sagnik Saha",
      role: "Visual Arts Co-Lead",
      image: "/Sagnik.png"
    },
    {
      name: "Akash Debbarma",
      role: "Treasurer",
      image: "/Akash.png"
    },
    {
      name: "Sayanika Paul",
      role: "Creative Team Lead",
      image: "/Sayanika.png"
    },
    {
      name: "Jai Surya Sai Suhas",
      role: "Editing Team Lead",
      image: "/Suhas.png"
    },
    {
      name: "Nandini Santra",
      role: "Social Media Team Lead",
      image: "/Nandini.png"
    },
     {
      name: "Aashika Jaiswal",
      role: "Social Media Team Co-Lead",
      image: "/Ashika.png"
    },
     {
      name: "Rajdeep Das",
      role: "Student coordinator",
      image: "/Rajdeep.png"
    },
     {
      name: "Sayan Debnath",
      role: "Event Management Team Lead",
      image: "/Sayan.png"
    }, {
      name: "Arghyajyoti Malkar",
      role: "Event Management Team Co-Lead",
      image: "/Arghyajoyti.png"
    },
     {
      name: "Ansheeka Bhardwaj",
      role: "content creation Team Lead",
      image: "/Ansheeka.png"
    },
     {
      name: "Priyanshu Das",
      role: "Content Creation Team Co-Lead",
      image: "/Priyanshu das.png"
    },
     {
      name: "Nilanjana Banerjee",
      role: "conent writing Lead",
      image: "/Nilanjana.png"
    },
     {
      name: "Devotuli Kar",
      role: "conent writing Team co-Lead",
      image: "/Devotuli.png"
    },

     {
      name: "Rudra Prakash",
      role: "Public Relation Team Lead",
      image: "/Rudra.png"
    },
     {
      name: "Priyanshu Acharjee",
      role: "Public Relation Team Co-Lead",
      image: "/Priyanshu Acharjee.png"
    },
     {
      name: "Sampili Debbarma",
      role: "Graphic Design Team Lead",
      image: "/Samplii.png"
    },
     {
      name: "Sanchita Bhattacharjee",
      role: "Graphic Design Team co-Lead",
      image: "/Sanchita.png"
    },
     {
      name: "Ashutosh Chaubey",
      role: "Graphic Design Team co-Lead",
      image: "/Ashutosh Chaubey.png"
    },
    {
      name: "Sagarika Malakar",
      role: "Photography Team Lead",
      image: "/Sagarika.png"
    },
    {
      name: "Ashmit khobragade",
      role: "Technical Team Lead",
      image: "/Ashmit.png"
    },
    
    
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24">
      
      <Navbar />

      
      <TeamRow title="Advisors" members={Advisor} />
      <TeamRow title="Executives" members={executives} />
      <TeamRow title="Core Members" members={members} />

    </div>
  );
}

export default Team;