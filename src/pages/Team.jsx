import Navbar from "../components/Navbar";
import TeamRow from "../components/TeamRow";

function Team() {
 

  const Advisor = [
    {
      name: "Hrishikesh Munde",
      role: "Club Advisor",
      image: "public/Hrishi Bhaiya.jpeg"
    },
    {
      name: "Baishali Paul",
      role: "Club Advisor",
      image: "public/Baisali didi.jpeg"
    },
     {
      name: "Prathamesh Shitre",
      role: "Club Advisor",
      image: "public/Prathamesh Bhaiya.jpeg"
    },
  ];

  const executives = [
    {
      name: "Kamlesh Kumar Baitha",
      role: "President",
      image: "public/kamlesh kumar.jpeg"
    },
    {
      name: "Debajit Datta",
      role: "Vice President",
      image: "public/Debajit VC.jpeg"
    },
     {
      name: "Jagjeet Singh",
      role: "Techinical Lead",
      image: "public/Jagjeet singh.jpeg"
    },
     {
      name: "Abhik Bhattacharjee",
      role: "Head of operations",
      image: "public/Abhik Bhattacharjee.jpeg"
    },
      {
      name: "Tushar Bhoumik",
      role: "Event coordinator",
      image: "public/Tushar.jpeg"
    },
      {
      name: "Arya R",
      role: "General Secretary",
      image: "public/Arya.jpeg"
    },
      {
      name: "Dipshika Sarkar",
      role: "Assistant General Secretary",
      image: "public/Dipshika.jpeg"
    },
        {
      name: "Raima Choudhury",
      role: "Assistant General Secretary",
      image: "public/Raima.jpeg"
    },
        {
      name: "Shyantika Saha",
      role: "Management Lead",
      image: "public/Shayantika.jpeg"
    },
  ];

  const members = [
    {
      name: "Payel Das",
      role: "Visual Arts Lead",
      image: "public/payal.png"
    },
    {
      name: "Sagnik Saha",
      role: "Visual Arts Co-Lead",
      image: "public/Sagnik.png"
    },
    {
      name: "Akash Debbarma",
      role: "Treasurer",
      image: "public/Akash.png"
    },
    {
      name: "Sayanika Paul",
      role: "Creative Team Lead",
      image: "public/Sayanika.png"
    },
    {
      name: "Jai Surya Sai Suhas",
      role: "Editing Team Lead",
      image: "public/Suhas.png"
    },
    {
      name: "Nandini Santra",
      role: "Social Media Team Lead",
      image: "public/Nandini.png"
    },
     {
      name: "Aashika Jaiswal",
      role: "Social Media Team Co-Lead",
      image: "public/Ashika.png"
    },
     {
      name: "Rajdeep Das",
      role: "Student coordinator",
      image: "public/Rajdeep.png"
    },
     {
      name: "Sayan Debnath",
      role: "Event Management Team Lead",
      image: "public/Sayan.png"
    }, {
      name: "Arghyajyoti Malkar",
      role: "Event Management Team Co-Lead",
      image: "public/Arghyajoyti.png"
    },
     {
      name: "Ansheeka Bhardwaj",
      role: "content creation Team Lead",
      image: "public/Ansheeka.png"
    },
     {
      name: "Priyanshu Das",
      role: "Content Creation Team Co-Lead",
      image: "public/Priyanshu das.png"
    },
     {
      name: "Nilanjana Banerjee",
      role: "conent writing Lead",
      image: "public/Nilanjana.png"
    },
     {
      name: "Devotuli Kar",
      role: "conent writing Team co-Lead",
      image: "public/Devotuli.png"
    },

     {
      name: "Rudra Prakash",
      role: "Public Relation Team Lead",
      image: "public/Rudra.png"
    },
     {
      name: "Priyanshu Acharjee",
      role: "Public Relation Team Co-Lead",
      image: "public/Priyanshu Acharjee.png"
    },
     {
      name: "Sampili Debbarma",
      role: "Graphic Design Team Lead",
      image: "public/Samplii.png"
    },
     {
      name: "Sanchita Bhattacharjee",
      role: "Graphic Design Team co-Lead",
      image: "public/Sanchita.png"
    },
     {
      name: "Ashutosh Chaubey",
      role: "Graphic Design Team co-Lead",
      image: "public/Ashutosh Chaubey.png"
    },
    {
      name: "Sagarika Malakar",
      role: "Photography Team Lead",
      image: "public/Sagarika.png"
    },
    {
      name: "Ashmit khobragade",
      role: "Technical Team Lead",
      image: "public/Ashmit.png"
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