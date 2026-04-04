import Navbar from "../components/Navbar";
import TeamRow from "../components/TeamRow";

function Team() {
 

  const Advisor = [
    {
      name: "Hrishikesh Munde",
      role: "Club Advisor",
      image: "src/assets/Hrishi Bhaiya.jpeg"
    },
    {
      name: "Baishali Paul",
      role: "Club Advisor",
      image: "src/assets/Baisali didi.jpeg"
    },
     {
      name: "Prathamesh Shitre",
      role: "Club Advisor",
      image: "src/assets/Prathamesh Bhaiya.jpeg"
    },
  ];

  const executives = [
    {
      name: "Kamlesh Kumar Baitha",
      role: "President",
      image: "src/assets/kamlesh kumar.jpeg"
    },
    {
      name: "Debajit Datta",
      role: "Vice President",
      image: "src/assets/Debajit VC.jpeg"
    },
     {
      name: "Jagjeet Singh",
      role: "Techinical Lead",
      image: "src/assets/Jagjeet singh.jpeg"
    },
     {
      name: "Abhik Bhattacharjee",
      role: "Head of operations",
      image: "src/assets/Abhik Bhattacharjee.jpeg"
    },
      {
      name: "Tushar Bhoumik",
      role: "Event coordinator",
      image: "src/assets/Tushar.jpeg"
    },
      {
      name: "Arya R",
      role: "General Secretary",
      image: "src/assets/Arya.jpeg"
    },
      {
      name: "Dipshika Sarkar",
      role: "Assistant General Secretary",
      image: "src/assets/Dipshika.jpeg"
    },
        {
      name: "Raima Choudhury",
      role: "Assistant General Secretary",
      image: "src/assets/Raima.jpeg"
    },
        {
      name: "Shyantika Saha",
      role: "Management Lead",
      image: "src/assets/Shayantika.jpeg"
    },
  ];

  const members = [
    {
      name: "Payel Das",
      role: "Visual Arts Lead",
      image: "src/assets/payal.png"
    },
    {
      name: "Sagnik Saha",
      role: "Visual Arts Co-Lead",
      image: "src/assets/Sagnik.png"
    },
    {
      name: "Akash Debbarma",
      role: "Treasurer",
      image: "src/assets/Akash.png"
    },
    {
      name: "Sayanika Paul",
      role: "Creative Team Lead",
      image: "src/assets/Sayanika.png"
    },
    {
      name: "Jai Surya Sai Suhas",
      role: "Editing Team Lead",
      image: "src/assets/Suhas.png"
    },
    {
      name: "Nandini Santra",
      role: "Social Media Team Lead",
      image: "src/assets/Nandini.png"
    },
     {
      name: "Aashika Jaiswal",
      role: "Social Media Team Co-Lead",
      image: "src/assets/Ashika.png"
    },
     {
      name: "Rajdeep Das",
      role: "Student coordinator",
      image: "src/assets/Rajdeep.png"
    },
     {
      name: "Sayan Debnath",
      role: "Event Management Team Lead",
      image: "src/assets/Sayan.png"
    }, {
      name: "Arghyajyoti Malkar",
      role: "Event Management Team Co-Lead",
      image: "src/assets/Arghyajoyti.png"
    },
     {
      name: "Ansheeka Bhardwaj",
      role: "content creation Team Lead",
      image: "src/assets/Ansheeka.png"
    },
     {
      name: "Priyanshu Das",
      role: "Content Creation Team Co-Lead",
      image: "src/assets/Priyanshu das.png"
    },
     {
      name: "Nilanjana Banerjee",
      role: "conent writing Lead",
      image: "src/assets/Nilanjana.png"
    },
     {
      name: "Devotuli Kar",
      role: "conent writing Team co-Lead",
      image: "src/assets/Devotuli.png"
    },

     {
      name: "Rudra Prakash",
      role: "Public Relation Team Lead",
      image: "src/assets/Rudra.png"
    },
     {
      name: "Priyanshu Acharjee",
      role: "Public Relation Team Co-Lead",
      image: "src/assets/Priyanshu Acharjee.png"
    },
     {
      name: "Sampili Debbarma",
      role: "Graphic Design Team Lead",
      image: "src/assets/Samplii.png"
    },
     {
      name: "Sanchita Bhattacharjee",
      role: "Graphic Design Team co-Lead",
      image: "src/assets/Sanchita.png"
    },
     {
      name: "Ashutosh Chaubey",
      role: "Graphic Design Team co-Lead",
      image: "src/assets/Ashutosh Chaubey.png"
    },
    {
      name: "Sagarika Malakar",
      role: "Photography Team Lead",
      image: "src/assets/Sagarika.png"
    },
    {
      name: "Ashmit khobragade",
      role: "Technical Team Lead",
      image: "src/assets/Ashmit.png"
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