const fs = require('fs');

const raw = `
1 DR.DEEPA GANESH 0 0 1 chennai TAMILNADU
2 DR.SHAMIKA DECHAMMA 0 0 2 chennai TAMILNADU
3 DR.ANITHA M 0 0 3 chennai TAMILNADU
4 DR.SHOBHA GIRESH 0 0 4 chennai TAMILNADU
5 DR. YANDE RAHULSANKRATYAYAN DHONDOPANT 0 0 5 beed maharashtra
6 DR.KALI KUMAR RAY 0 0 6 berhampore west bengal
7 DR.ANAGHAA . R 0 0 7 bangalore karnataka
8 DR.NIRANJANI RAJACHANDER 0 0 8 chennai TAMILNADU
9 DR.EZHILARASI KARTHIKEYAN 0 0 9 ulundurpet TAMILNADU
10 DR.SAHITYALAKSHMI 0 1 0 chennai TAMILNADU
11 DR. POOJITH GODALA 0 1 1 hydrabad telangana
12 DR.MONIKA JINESH PAMNI 0 1 2 mumbai maharashtra
13 DR. YAZHINI SELVARAJ 0 1 3 madurai TAMILNADU
14 DR.ANUSHA BADVELI 0 1 4 hydrabad telangana
15 DR.HIMA BINDU MASINA 0 1 5 vijayawada andhra pradesh
16 DR.KAVITHA LEELA SUKUMARAN 0 1 6 kayamkulam kerala
17 DR.MANVI VERMA 0 1 7 mumbai maharashtra
18 DR.LAVANYA KIRAN 0 1 8 bangalore karnataka
19 DR.JITHA VINEETH 0 1 9 calicut kerala
20 DR.NASREEN ALEEM SIDDIQUI 0 2 0 mumbai maharashtra

21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 DR.SUKHADA RAO DR.RAHUL JAIN VORA DR.TEJA REDDY PANDIRI DR.MADHURI DEVI SAMUDRALA DR.JAMUNA DEVI DR.DUKLE VIKRAM VASUDEV DR.GITANJALI KARTHIK DR.SOUNDARYA .M DR.UMA MAHESWARI DR.NAMRATA KULKARNI DR.SHUBHASHREE DR.JAYABHARATHI VADDI DR.ASHWIN RAO DR.JAMES ROY KANJOOR DR.M.MURUGA PRIYA DR.JAYALAKSHMI DR.SHIVA SINGH SHEKHAWAT DR.H.V.MANORAMA DR.PAMULAPATI RATHIKA RANI DR.DHARINI .M DR.K.LALITHA REDDY DR.J.A. CHITRA DR.SINDHU LAKSHMI DURGESH 0 2 1 0 2 2 0 2 3 0 2 4 0 2 5
0 2 6 0 2 7 0 2 8 0 2 9 0 3 0 0 3 1 0 3 2 0 3 3 0 3 4 0 3 5 0 3 6 0 3 7 0 3 8 0 3 9 0 4 0 0 4 1 0 4 2 0 4 3 chennai indore kodad yeleswaram candolim selunderabad coimbatore nagercoil dharwad chennai bhadrachalam salem coimbatore thanjavur hydrabad chennai trirela guntur thanjavur hyderabad chennai mysore TAMILNADU
madhya pradesh
telangana
andhra pradesh
goa
telangana
TAMILNADU
TAMILNADU
karnataka
TAMILNADU
telangana
TAMILNADU
TAMILNADU
TAMILNADU
telangana
TAMILNADU
KERALA
andhra pradesh
tamilnadu
telangana
TAMILNADU
karnataka

44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 DR.ALPA ANAND KHAKHAR DR.ANJUM AHMED DR.VIJAYALAKSHMI MURUGESAN DR.MAGDUM ANIL ASHOK DR.K.SRISUDHA DR.VIDHYA PANCHOLIA DR.TELLAKULA LAKSHMI VANI DR.SABBANI SUREKHA DR.PAIDI SWARNALATHA DR.T.NEELIMA DR.SETHULAKSHMI.S DR. M.KEERTHI PRIYA DR.R.SHOBA DR.PREETHY KORAH PERUMALIL DR.THULASIDEVI .K.C DR.SIMRAN DHAWAN DR.SUDHA PENUMALLI DR.G.HEMA SREE DR. SAUBHAGYA BHAJANTRI DR.SAI SANTOSH SHIRADKAR DR.KANDARAPU SOWMYA SRI DR. HAVEENA THANGAMANI 0 4 4 0 45 0 46 0 47 0 48 0 49
0 50 0 51 0 52 0 53 0 54 0 55 0 56 0 57 0 58 0 59 0 6 0 0 6 1
0 6 2 0 6 3 0 6 4 0 6 5 0 6 6 chennai udups chennai jaysingpur medavakkam godavarikhaavi hyderabad srikakulam hydrabad chengannur tada chennai kottayam thrissur panchkola guntur hyderabad hyderabad nanded hyderabad chennai TAMILNADU
karnataka
TAMILNADU
maharashtra
TAMILNADU
telangana
telangana
andhra pradesh
telangana
kerala
andhra pradesh
TAMILNADU
kerala
kerala
haryana
andhra pradesh
telangana
telangana
maharashtra
telangana
TAMILNADU

67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 DR.S.SANGEETHA DR.BEENA BAHULEYAN DR.NANDHINI ELUMALAI DR. SRUNGARAPU TEJASWI DR.M.H.ABINAYA DR.RATHNA RAMAMURTHI DR.SASIREKHA .K DR.SWETHA CHANDRASEKAR DR.SHANMUGA PRAKASH .R DR. YOGITA GAUTAM DR.KEERTHIKA YOKESHVARAN DR.T.V.CHITRA DR. NALLURI HIMABINDHU DR.MYTHILY PRATHIBHA DR.SARAH ROBERTS O.R DR.WABLE AJAY GOVINDRAO DR.JAYANTHI SHANMUGAM PALANISWAMY DR.SHUBANGI ADATE DR.AMIRTA SAHA DR.JOSHI BHAIRAVI RAMESHKUMAR DR.KAVITHA NAGARAJAN 0 6 7
0 6 8 0 6 9 0 7 0 0 7 1 0 7 2 0 7 3 0 7 4 0 7 5 0 7 6 0 7 7 0 7 8 0 7 9 0 8 0 0 8 1 0 8 2 0 8 3 0 8 4 0 8 5
0 8 6
0 8 7 0 8 8 0 8 9 thanjavur kozhikode chennai guntur chennai madurai chennai chennai chennai indore madurai coimbatore ongole madurai coimbatore chalisgoon salem kanpur ahmedabad salem TAMILNADU
kerala
TAMILNADU
andhra pradesh
TAMILNADU
TAMILNADU
TAMILNADU
TAMILNADU
TAMILNADU
madhya pradesh
TAMILNADU
TAMILNADU
andhra pradesh
TAMILNADU
TAMILNADU
maharashtra
TAMILNADU
uthra pradesh
gujarat
TAMILNADU

90 DR.PRIYADHARSHINI MANOHARAN 0 9 0 chennai TAMILNADU
91 DR.ADITI DEODHAR 0 9 1 thane maharashtra
92 DR.KONDAPALLI SOWMIYA 0 9 2 hyderabad telangana
93 DR.SHANKAR NAIK NUNAVATH 0 9 3 khammam telangana
94 DR.SITALAKSHMI VADREVU 0 9 4 hydrabad telangana
95 DR.NITHYA .K 0 9 5 puducherry TAMILNADU
96 DR.RASHMI YOGISH 0 9 6 bangalore karnataka
97 DR.ARCHANA DEVI 0 9 7 trichy tamilnadu
98 DR.N.VIJAYALAKSHMI 0 9 8 karim nagar telangana
99 DR.BEGARI SUJATHA 0 9 9 hyderabad telangana
100 DR.ROOPA VERNEKAR 100 bangalore karnataka
101 DR.RUPA RAJASHEKAR 101 bangalore karnataka
102 DR.SUJAYA.A.HIREGOUDAR 102 hubli dharwad karnataka
103 DR.CHERUKURI KARUNA KUMARI 103 kakinada andhra pradesh
104 DR.NANDIGAM INDIRA 104 tanuku andhra pradesh
105 DR.VAISHNAVI .S 105 viruthunagar TAMILNADU
106 DR.KURAVI BRAHMARA GAYATHRI 106 vijayawada andhra pradesh
107 DR.JEEVITHA 107 madurai TAMILNADU
108 DR.NANCY.F 108 ramanathapuram TAMILNADU
109 DR.KARTHIYAYENI GNANAKKUMAR 109 ramanathapuram TAMILNADU
110 DR.ANKITA MALEWAR 110 nagpur maharashtra
111 DR.BUDATI RATHIKA 111 chirala andhra pradesh
112 DR.HARSHINI 112 trichy tamilnadu
`;

function extractContinuous(lines) {
  let res = [];
  for (let l of lines) {
    let match = l.match(/^(\d+)\s+(.+?)\s+(\d(?:\s*\d)+)\s+([a-zA-Z\s]+)\s+([a-zA-Z\s]+)$/);
    if (!match) continue;
    res.push({
      sno: parseInt(match[1]),
      name: match[2].trim(),
      memNo: match[3].replace(/\s+/g, ''),
      city: match[4].trim(),
      state: match[5].trim()
    });
  }
  return res;
}

// 1-20
let block1 = raw.split("\n\n")[0].split('\n');
let res1 = extractContinuous(block1);

// 90-112
let block5 = raw.split("\n\n")[4].split('\n').filter(Boolean);
let res5 = [];
for (let l of block5) {
  // e.g. "90 DR.PRIYADHARSHINI MANOHARAN 0 9 0 chennai TAMILNADU"
  // e.g. "100 DR.ROOPA VERNEKAR 100 bangalore karnataka"
  let match = l.match(/^(\d+)\s+(.+?)\s+(0?\s*\d\s*\d|10[0-9]|11[0-2])\s+(.+)\s+(TAMILNADU|maharashtra|telangana|karnataka|tamilnadu|andhra pradesh)$/i);
  if (match) {
    res5.push({
      sno: parseInt(match[1]),
      name: match[2].trim(),
      memNo: match[3].replace(/\s+/g, ''),
      city: match[4].trim(),
      state: match[5].trim()
    });
  } else {
    // simpler match
    let p = l.split(/\s+/);
    if (p.length > 4) {
      let sno = parseInt(p[0]);
      let state = p.slice(-1)[0] === 'pradesh' ? p.slice(-2).join(' ') : (p.slice(-1)[0] === 'nadu' ? p.slice(-2).join(' ') : p.slice(-1)[0]);
      let stateWordCount = state.split(' ').length;
      let city = p.slice(-(stateWordCount+1), -stateWordCount).join(' ');
      let memNoIdx = p.findIndex(x => /^\d$/.test(x) || /^\d{2,3}$/.test(x) && p.indexOf(x) > 0);
      let name = '';
      let memNo = '';
      if (memNoIdx > 0) {
        // Find where the mem no starts. Wait, 100 is 100. Let's just do regex matching.
        let match2 = l.match(/^(\d+)\s+(DR\..+?)\s+((?:\d\s*){3})\s+(.+?)\s+(TAMILNADU|maharashtra|telangana|karnataka|tamilnadu|andhra pradesh)$/i);
        if (match2) {
            name = match2[2]; memNo = match2[3].replace(/\s+/g,''); city=match2[4]; state=match2[5];
        }
      }
      res5.push({sno, name, memNo, city, state});
    }
  }
}

console.log(JSON.stringify(res1.slice(0,3))); // just to check

