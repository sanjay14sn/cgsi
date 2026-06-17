import Layout from "@/components/layout/Layout";


const members = [
  {
    "sno": 1,
    "name": "DR.DEEPA GANESH",
    "memNo": "001",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 2,
    "name": "DR.SHAMIKA DECHAMMA",
    "memNo": "002",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 3,
    "name": "DR.ANITHA M",
    "memNo": "003",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 4,
    "name": "DR.SHOBHA GIRESH",
    "memNo": "004",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 5,
    "name": "DR. YANDE RAHULSANKRATYAYAN DHONDOPANT",
    "memNo": "005",
    "city": "Beed",
    "state": "Maharashtra"
  },
  {
    "sno": 6,
    "name": "DR.KALI KUMAR RAY",
    "memNo": "006",
    "city": "Berhampore",
    "state": "West Bengal"
  },
  {
    "sno": 7,
    "name": "DR.ANAGHAA . R",
    "memNo": "007",
    "city": "Bangalore",
    "state": "Karnataka"
  },
  {
    "sno": 8,
    "name": "DR.NIRANJANI RAJACHANDER",
    "memNo": "008",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 9,
    "name": "DR.EZHILARASI KARTHIKEYAN",
    "memNo": "009",
    "city": "Ulundurpet",
    "state": "Tamilnadu"
  },
  {
    "sno": 10,
    "name": "DR.SAHITYALAKSHMI",
    "memNo": "010",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 11,
    "name": "DR. POOJITH GODALA",
    "memNo": "011",
    "city": "Hydrabad",
    "state": "Telangana"
  },
  {
    "sno": 12,
    "name": "DR.MONIKA JINESH PAMNI",
    "memNo": "012",
    "city": "Mumbai",
    "state": "Maharashtra"
  },
  {
    "sno": 13,
    "name": "DR. YAZHINI SELVARAJ",
    "memNo": "013",
    "city": "Madurai",
    "state": "Tamilnadu"
  },
  {
    "sno": 14,
    "name": "DR.ANUSHA BADVELI",
    "memNo": "014",
    "city": "Hydrabad",
    "state": "Telangana"
  },
  {
    "sno": 15,
    "name": "DR.HIMA BINDU MASINA",
    "memNo": "015",
    "city": "Vijayawada",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 16,
    "name": "DR.KAVITHA LEELA SUKUMARAN",
    "memNo": "016",
    "city": "Kayamkulam",
    "state": "Kerala"
  },
  {
    "sno": 17,
    "name": "DR.MANVI VERMA",
    "memNo": "017",
    "city": "Mumbai",
    "state": "Maharashtra"
  },
  {
    "sno": 18,
    "name": "DR.LAVANYA KIRAN",
    "memNo": "018",
    "city": "Bangalore",
    "state": "Karnataka"
  },
  {
    "sno": 19,
    "name": "DR.JITHA VINEETH",
    "memNo": "019",
    "city": "Calicut",
    "state": "Kerala"
  },
  {
    "sno": 20,
    "name": "DR.NASREEN ALEEM SIDDIQUI",
    "memNo": "020",
    "city": "Mumbai",
    "state": "Maharashtra"
  },
  {
    "sno": 21,
    "name": "DR.SUKHADA RAO",
    "memNo": "021",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 22,
    "name": "DR.RAHUL JAIN VORA",
    "memNo": "022",
    "city": "Indore",
    "state": "Madhya Pradesh"
  },
  {
    "sno": 23,
    "name": "DR.TEJA REDDY PANDIRI",
    "memNo": "023",
    "city": "Kodad",
    "state": "Telangana"
  },
  {
    "sno": 24,
    "name": "DR.MADHURI DEVI SAMUDRALA",
    "memNo": "024",
    "city": "Yeleswaram",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 25,
    "name": "DR.JAMUNA DEVI",
    "memNo": "025",
    "city": "Candolim",
    "state": "Goa"
  },
  {
    "sno": 26,
    "name": "DR.DUKLE VIKRAM VASUDEV",
    "memNo": "026",
    "city": "Selunderabad",
    "state": "Telangana"
  },
  {
    "sno": 27,
    "name": "DR.GITANJALI KARTHIK",
    "memNo": "027",
    "city": "Coimbatore",
    "state": "Tamilnadu"
  },
  {
    "sno": 28,
    "name": "DR.SOUNDARYA .M",
    "memNo": "028",
    "city": "Nagercoil",
    "state": "Tamilnadu"
  },
  {
    "sno": 29,
    "name": "DR.UMA MAHESWARI",
    "memNo": "029",
    "city": "Dharwad",
    "state": "Karnataka"
  },
  {
    "sno": 30,
    "name": "DR.NAMRATA KULKARNI",
    "memNo": "030",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 31,
    "name": "DR.SHUBHASHREE",
    "memNo": "031",
    "city": "Bhadrachalam",
    "state": "Telangana"
  },
  {
    "sno": 32,
    "name": "DR.JAYABHARATHI VADDI",
    "memNo": "032",
    "city": "Salem",
    "state": "Tamilnadu"
  },
  {
    "sno": 33,
    "name": "DR.ASHWIN RAO",
    "memNo": "033",
    "city": "Coimbatore",
    "state": "Tamilnadu"
  },
  {
    "sno": 34,
    "name": "DR.JAMES ROY KANJOOR",
    "memNo": "034",
    "city": "Thanjavur",
    "state": "Tamilnadu"
  },
  {
    "sno": 35,
    "name": "DR.M.MURUGA PRIYA",
    "memNo": "035",
    "city": "Hydrabad",
    "state": "Telangana"
  },
  {
    "sno": 36,
    "name": "DR.JAYALAKSHMI",
    "memNo": "036",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 37,
    "name": "DR.SHIVA SINGH SHEKHAWAT",
    "memNo": "037",
    "city": "Trirela",
    "state": "Kerala"
  },
  {
    "sno": 38,
    "name": "DR.H.V.MANORAMA",
    "memNo": "038",
    "city": "Guntur",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 39,
    "name": "DR.PAMULAPATI RATHIKA RANI",
    "memNo": "039",
    "city": "Thanjavur",
    "state": "Tamilnadu"
  },
  {
    "sno": 40,
    "name": "DR.DHARINI .M",
    "memNo": "040",
    "city": "Hyderabad",
    "state": "Telangana"
  },
  {
    "sno": 41,
    "name": "DR.K.LALITHA REDDY",
    "memNo": "041",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 42,
    "name": "DR.J.A. CHITRA",
    "memNo": "042",
    "city": "Mysore",
    "state": "Karnataka"
  },
  {
    "sno": 43,
    "name": "DR.SINDHU LAKSHMI DURGESH",
    "memNo": "043",
    "city": "",
    "state": ""
  },
  {
    "sno": 44,
    "name": "DR.ALPA ANAND KHAKHAR",
    "memNo": "044",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 45,
    "name": "DR.ANJUM AHMED",
    "memNo": "045",
    "city": "Udups",
    "state": "Karnataka"
  },
  {
    "sno": 46,
    "name": "DR.VIJAYALAKSHMI MURUGESAN",
    "memNo": "046",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 47,
    "name": "DR.MAGDUM ANIL ASHOK",
    "memNo": "047",
    "city": "Jaysingpur",
    "state": "Maharashtra"
  },
  {
    "sno": 48,
    "name": "DR.K.SRISUDHA",
    "memNo": "048",
    "city": "Medavakkam",
    "state": "Tamilnadu"
  },
  {
    "sno": 49,
    "name": "DR.VIDHYA PANCHOLIA",
    "memNo": "049",
    "city": "Godavarikhaavi",
    "state": "Telangana"
  },
  {
    "sno": 50,
    "name": "DR.TELLAKULA LAKSHMI VANI",
    "memNo": "050",
    "city": "Hyderabad",
    "state": "Telangana"
  },
  {
    "sno": 51,
    "name": "DR.SABBANI SUREKHA",
    "memNo": "051",
    "city": "Srikakulam",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 52,
    "name": "DR.PAIDI SWARNALATHA",
    "memNo": "052",
    "city": "Hydrabad",
    "state": "Telangana"
  },
  {
    "sno": 53,
    "name": "DR.T.NEELIMA",
    "memNo": "053",
    "city": "Chengannur",
    "state": "Kerala"
  },
  {
    "sno": 54,
    "name": "DR.SETHULAKSHMI.S",
    "memNo": "054",
    "city": "Tada",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 55,
    "name": "DR. M.KEERTHI PRIYA",
    "memNo": "055",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 56,
    "name": "DR.R.SHOBA",
    "memNo": "056",
    "city": "Kottayam",
    "state": "Kerala"
  },
  {
    "sno": 57,
    "name": "DR.PREETHY KORAH PERUMALIL",
    "memNo": "057",
    "city": "Thrissur",
    "state": "Kerala"
  },
  {
    "sno": 58,
    "name": "DR.THULASIDEVI .K.C",
    "memNo": "058",
    "city": "Panchkola",
    "state": "Haryana"
  },
  {
    "sno": 59,
    "name": "DR.SIMRAN DHAWAN",
    "memNo": "059",
    "city": "Guntur",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 60,
    "name": "DR.SUDHA PENUMALLI",
    "memNo": "060",
    "city": "Hyderabad",
    "state": "Telangana"
  },
  {
    "sno": 61,
    "name": "DR.G.HEMA SREE",
    "memNo": "061",
    "city": "Hyderabad",
    "state": "Telangana"
  },
  {
    "sno": 62,
    "name": "DR. SAUBHAGYA BHAJANTRI",
    "memNo": "062",
    "city": "Nanded",
    "state": "Maharashtra"
  },
  {
    "sno": 63,
    "name": "DR.SAI SANTOSH SHIRADKAR",
    "memNo": "063",
    "city": "Hyderabad",
    "state": "Telangana"
  },
  {
    "sno": 64,
    "name": "DR.KANDARAPU SOWMYA SRI",
    "memNo": "064",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 65,
    "name": "DR. HAVEENA THANGAMANI",
    "memNo": "065",
    "city": "",
    "state": ""
  },
  {
    "sno": 67,
    "name": "DR.S.SANGEETHA",
    "memNo": "067",
    "city": "Thanjavur",
    "state": "Tamilnadu"
  },
  {
    "sno": 68,
    "name": "DR.BEENA BAHULEYAN",
    "memNo": "068",
    "city": "Kozhikode",
    "state": "Kerala"
  },
  {
    "sno": 69,
    "name": "DR.NANDHINI ELUMALAI",
    "memNo": "069",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 70,
    "name": "DR. SRUNGARAPU TEJASWI",
    "memNo": "070",
    "city": "Guntur",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 71,
    "name": "DR.M.H.ABINAYA",
    "memNo": "071",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 72,
    "name": "DR.RATHNA RAMAMURTHI",
    "memNo": "072",
    "city": "Madurai",
    "state": "Tamilnadu"
  },
  {
    "sno": 73,
    "name": "DR.SASIREKHA .K",
    "memNo": "073",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 74,
    "name": "DR.SWETHA CHANDRASEKAR",
    "memNo": "074",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 75,
    "name": "DR.SHANMUGA PRAKASH .R",
    "memNo": "075",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 76,
    "name": "DR. YOGITA GAUTAM",
    "memNo": "076",
    "city": "Indore",
    "state": "Madhya Pradesh"
  },
  {
    "sno": 77,
    "name": "DR.KEERTHIKA YOKESHVARAN",
    "memNo": "077",
    "city": "Madurai",
    "state": "Tamilnadu"
  },
  {
    "sno": 78,
    "name": "DR.T.V.CHITRA",
    "memNo": "078",
    "city": "Coimbatore",
    "state": "Tamilnadu"
  },
  {
    "sno": 79,
    "name": "DR. NALLURI HIMABINDHU",
    "memNo": "079",
    "city": "Ongole",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 80,
    "name": "DR.MYTHILY PRATHIBHA",
    "memNo": "080",
    "city": "Madurai",
    "state": "Tamilnadu"
  },
  {
    "sno": 81,
    "name": "DR.SARAH ROBERTS O.R",
    "memNo": "081",
    "city": "Coimbatore",
    "state": "Tamilnadu"
  },
  {
    "sno": 82,
    "name": "DR.WABLE AJAY GOVINDRAO",
    "memNo": "082",
    "city": "Chalisgoon",
    "state": "Maharashtra"
  },
  {
    "sno": 83,
    "name": "DR.JAYANTHI SHANMUGAM PALANISWAMY",
    "memNo": "083",
    "city": "Salem",
    "state": "Tamilnadu"
  },
  {
    "sno": 84,
    "name": "DR.SHUBANGI ADATE",
    "memNo": "084",
    "city": "Kanpur",
    "state": "Uthra Pradesh"
  },
  {
    "sno": 85,
    "name": "DR.AMIRTA SAHA",
    "memNo": "085",
    "city": "Ahmedabad",
    "state": "Gujarat"
  },
  {
    "sno": 86,
    "name": "DR.JOSHI BHAIRAVI RAMESHKUMAR",
    "memNo": "086",
    "city": "Salem",
    "state": "Tamilnadu"
  },
  {
    "sno": 87,
    "name": "DR.KAVITHA NAGARAJAN",
    "memNo": "087",
    "city": "",
    "state": ""
  },
  {
    "sno": 90,
    "name": "DR.PRIYADHARSHINI MANOHARAN",
    "memNo": "090",
    "city": "Chennai",
    "state": "Tamilnadu"
  },
  {
    "sno": 91,
    "name": "DR.ADITI DEODHAR",
    "memNo": "091",
    "city": "Thane",
    "state": "Maharashtra"
  },
  {
    "sno": 92,
    "name": "DR.KONDAPALLI SOWMIYA",
    "memNo": "092",
    "city": "Hyderabad",
    "state": "Telangana"
  },
  {
    "sno": 93,
    "name": "DR.SHANKAR NAIK NUNAVATH",
    "memNo": "093",
    "city": "Khammam",
    "state": "Telangana"
  },
  {
    "sno": 94,
    "name": "DR.SITALAKSHMI VADREVU",
    "memNo": "094",
    "city": "Hydrabad",
    "state": "Telangana"
  },
  {
    "sno": 95,
    "name": "DR.NITHYA .K",
    "memNo": "095",
    "city": "Puducherry",
    "state": "Tamilnadu"
  },
  {
    "sno": 96,
    "name": "DR.RASHMI YOGISH",
    "memNo": "096",
    "city": "Bangalore",
    "state": "Karnataka"
  },
  {
    "sno": 97,
    "name": "DR.ARCHANA DEVI",
    "memNo": "097",
    "city": "Trichy",
    "state": "Tamilnadu"
  },
  {
    "sno": 98,
    "name": "DR.N.VIJAYALAKSHMI",
    "memNo": "098",
    "city": "Karim Nagar",
    "state": "Telangana"
  },
  {
    "sno": 99,
    "name": "DR.BEGARI SUJATHA",
    "memNo": "099",
    "city": "Hyderabad",
    "state": "Telangana"
  },
  {
    "sno": 100,
    "name": "DR.ROOPA VERNEKAR",
    "memNo": "100",
    "city": "Bangalore",
    "state": "Karnataka"
  },
  {
    "sno": 101,
    "name": "DR.RUPA RAJASHEKAR",
    "memNo": "101",
    "city": "Bangalore",
    "state": "Karnataka"
  },
  {
    "sno": 102,
    "name": "DR.SUJAYA.A.HIREGOUDAR",
    "memNo": "102",
    "city": "Hubli Dharwad",
    "state": "Karnataka"
  },
  {
    "sno": 103,
    "name": "DR.CHERUKURI KARUNA KUMARI",
    "memNo": "103",
    "city": "Kakinada",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 104,
    "name": "DR.NANDIGAM INDIRA",
    "memNo": "104",
    "city": "Tanuku",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 105,
    "name": "DR.VAISHNAVI .S",
    "memNo": "105",
    "city": "Viruthunagar",
    "state": "Tamilnadu"
  },
  {
    "sno": 106,
    "name": "DR.KURAVI BRAHMARA GAYATHRI",
    "memNo": "106",
    "city": "Vijayawada",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 107,
    "name": "DR.JEEVITHA",
    "memNo": "107",
    "city": "Madurai",
    "state": "Tamilnadu"
  },
  {
    "sno": 108,
    "name": "DR.NANCY.F",
    "memNo": "108",
    "city": "Ramanathapuram",
    "state": "Tamilnadu"
  },
  {
    "sno": 109,
    "name": "DR.KARTHIYAYENI GNANAKKUMAR",
    "memNo": "109",
    "city": "Ramanathapuram",
    "state": "Tamilnadu"
  },
  {
    "sno": 110,
    "name": "DR.ANKITA MALEWAR",
    "memNo": "110",
    "city": "Nagpur",
    "state": "Maharashtra"
  },
  {
    "sno": 111,
    "name": "DR.BUDATI RATHIKA",
    "memNo": "111",
    "city": "Chirala",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 112,
    "name": "DR.HARSHINI",
    "memNo": "112",
    "city": "Trichy",
    "state": "Tamilnadu"
  },
  {
    "sno": 113,
    "name": "DR.POONAM MISHRA",
    "memNo": "113",
    "city": "Lucknow",
    "state": "Uttar Pradesh"
  },
  {
    "sno": 114,
    "name": "DR.CHITTI BALA BHAVANA SAI KIRTHI",
    "memNo": "114",
    "city": "Secunderabad",
    "state": "Telangana"
  },
  {
    "sno": 115,
    "name": "DR. MANJUSHA SALADI",
    "memNo": "115",
    "city": "Pithapuram",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 116,
    "name": "DR.SWINKY JAIN",
    "memNo": "116",
    "city": "Mehatpur",
    "state": "Himachal Pradesh"
  },
  {
    "sno": 117,
    "name": "DR.SUSHMA THADAKAMADLA",
    "memNo": "117",
    "city": "Kalwa Kurthy",
    "state": "Telangana"
  },
  {
    "sno": 118,
    "name": "DR.ASWINI SANJAY NIMJE",
    "memNo": "118",
    "city": "Buldhana",
    "state": "Maharashtra"
  },
  {
    "sno": 119,
    "name": "DR.MEDA SUSHMA",
    "memNo": "119",
    "city": "Nakreka",
    "state": "Telangana"
  },
  {
    "sno": 120,
    "name": "DR. KARANAM SYAMALA",
    "memNo": "120",
    "city": "Vizinagaram",
    "state": "Andhra Pradesh"
  },
  {
    "sno": 121,
    "name": "DR.RIDHI SHUKLA",
    "memNo": "121",
    "city": "",
    "state": ""
  }
];

/* -------------------------------------------------------------------------- */
/* PAGE                                     */
/* -------------------------------------------------------------------------- */

const Team = () => {
  return (
    <Layout>
      {/* Global Background Mesh */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      {/* ================= MEMBERS DIRECTORY (TABLE) ================= */}
      <section className="pt-32 pb-20 bg-transparent">
        <div className="w-full px-4 md:px-8 xl:px-16 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              CGSI <span className="text-primary italic">Members Directory</span>
            </h2>
            <div className="h-px w-24 bg-primary/40 mx-auto mt-6" />
          </div>

          <div className="w-full max-w-[95%] lg:max-w-[100%] mx-auto bg-slate-50 md:bg-white rounded-3xl md:shadow-xl md:border border-border/50 overflow-hidden">
            <div className="w-full">
              <table className="w-full text-left border-collapse block md:table">
                <thead className="bg-[#1a365d] text-white shadow-md hidden md:table-header-group">
                  <tr className="md:table-row">
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">S.No</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Doctor Name</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Membership No.</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">City</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y md:divide-y-0 divide-transparent block md:table-row-group">
                  {members.map((m, idx) => (
                    <tr key={idx} className="block md:table-row bg-white rounded-2xl shadow-sm md:shadow-none border border-slate-200 md:border-b md:border-border mb-4 md:mb-0 p-4 md:p-0 hover:bg-muted/30 transition-colors">
                      <td className="flex justify-between items-center md:table-cell py-2 md:py-4 px-2 md:px-6 text-sm border-b md:border-none border-slate-100">
                        <span className="md:hidden font-bold text-slate-400 uppercase text-[10px] tracking-wider">S.No</span>
                        <span className="font-semibold text-black">{m.sno}</span>
                      </td>
                      <td className="flex justify-between items-center md:table-cell py-2 md:py-4 px-2 md:px-6 text-sm border-b md:border-none border-slate-100">
                        <span className="md:hidden font-bold text-slate-400 uppercase text-[10px] tracking-wider">Doctor Name</span>
                        <strong className="font-bold text-black md:whitespace-nowrap max-w-[65%] md:max-w-none text-right md:text-left">{m.name}</strong>
                      </td>
                      <td className="flex justify-between items-center md:table-cell py-2 md:py-4 px-2 md:px-6 text-sm border-b md:border-none border-slate-100">
                        <span className="md:hidden font-bold text-slate-400 uppercase text-[10px] tracking-wider">Membership No.</span>
                        <span className="font-bold text-primary">CGSI-{String(m.memNo).padStart(3, '0')}</span>
                      </td>
                      <td className="flex justify-between items-center md:table-cell py-2 md:py-4 px-2 md:px-6 text-sm border-b md:border-none border-slate-100">
                        <span className="md:hidden font-bold text-slate-400 uppercase text-[10px] tracking-wider">City</span>
                        <span className="font-semibold text-slate-700">{m.city || "-"}</span>
                      </td>
                      <td className="flex justify-between items-center md:table-cell py-2 md:py-4 px-2 md:px-6 text-sm">
                        <span className="md:hidden font-bold text-slate-400 uppercase text-[10px] tracking-wider">State</span>
                        <span className="font-semibold text-slate-700">{m.state || "-"}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Team;
