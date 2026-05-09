import json

raw = """
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

21 DR.SUKHADA RAO 021 chennai TAMILNADU
22 DR.RAHUL JAIN VORA 022 indore madhya pradesh
23 DR.TEJA REDDY PANDIRI 023 kodad telangana
24 DR.MADHURI DEVI SAMUDRALA 024 yeleswaram andhra pradesh
25 DR.JAMUNA DEVI 025 candolim goa
26 DR.DUKLE VIKRAM VASUDEV 026 selunderabad telangana
27 DR.GITANJALI KARTHIK 027 coimbatore TAMILNADU
28 DR.SOUNDARYA .M 028 nagercoil TAMILNADU
29 DR.UMA MAHESWARI 029 dharwad karnataka
30 DR.NAMRATA KULKARNI 030 chennai TAMILNADU
31 DR.SHUBHASHREE 031 bhadrachalam telangana
32 DR.JAYABHARATHI VADDI 032 salem TAMILNADU
33 DR.ASHWIN RAO 033 coimbatore TAMILNADU
34 DR.JAMES ROY KANJOOR 034 thanjavur TAMILNADU
35 DR.M.MURUGA PRIYA 035 hydrabad telangana
36 DR.JAYALAKSHMI 036 chennai TAMILNADU
37 DR.SHIVA SINGH SHEKHAWAT 037 trirela KERALA
38 DR.H.V.MANORAMA 038 guntur andhra pradesh
39 DR.PAMULAPATI RATHIKA RANI 039 thanjavur tamilnadu
40 DR.DHARINI .M 040 hyderabad telangana
41 DR.K.LALITHA REDDY 041 chennai TAMILNADU
42 DR.J.A. CHITRA 042 mysore karnataka
43 DR.SINDHU LAKSHMI DURGESH 043 - -

44 DR.ALPA ANAND KHAKHAR 044 chennai TAMILNADU
45 DR.ANJUM AHMED 045 udups karnataka
46 DR.VIJAYALAKSHMI MURUGESAN 046 chennai TAMILNADU
47 DR.MAGDUM ANIL ASHOK 047 jaysingpur maharashtra
48 DR.K.SRISUDHA 048 medavakkam TAMILNADU
49 DR.VIDHYA PANCHOLIA 049 godavarikhaavi telangana
50 DR.TELLAKULA LAKSHMI VANI 050 hyderabad telangana
51 DR.SABBANI SUREKHA 051 srikakulam andhra pradesh
52 DR.PAIDI SWARNALATHA 052 hydrabad telangana
53 DR.T.NEELIMA 053 chengannur kerala
54 DR.SETHULAKSHMI.S 054 tada andhra pradesh
55 DR. M.KEERTHI PRIYA 055 chennai TAMILNADU
56 DR.R.SHOBA 056 kottayam kerala
57 DR.PREETHY KORAH PERUMALIL 057 thrissur kerala
58 DR.THULASIDEVI .K.C 058 panchkola haryana
59 DR.SIMRAN DHAWAN 059 guntur andhra pradesh
60 DR.SUDHA PENUMALLI 060 hyderabad telangana
61 DR.G.HEMA SREE 061 hyderabad telangana
62 DR. SAUBHAGYA BHAJANTRI 062 nanded maharashtra
63 DR.SAI SANTOSH SHIRADKAR 063 hyderabad telangana
64 DR.KANDARAPU SOWMYA SRI 064 chennai TAMILNADU
65 DR. HAVEENA THANGAMANI 065 - -

67 DR.S.SANGEETHA 067 thanjavur TAMILNADU
68 DR.BEENA BAHULEYAN 068 kozhikode kerala
69 DR.NANDHINI ELUMALAI 069 chennai TAMILNADU
70 DR. SRUNGARAPU TEJASWI 070 guntur andhra pradesh
71 DR.M.H.ABINAYA 071 chennai TAMILNADU
72 DR.RATHNA RAMAMURTHI 072 madurai TAMILNADU
73 DR.SASIREKHA .K 073 chennai TAMILNADU
74 DR.SWETHA CHANDRASEKAR 074 chennai TAMILNADU
75 DR.SHANMUGA PRAKASH .R 075 chennai TAMILNADU
76 DR. YOGITA GAUTAM 076 indore madhya pradesh
77 DR.KEERTHIKA YOKESHVARAN 077 madurai TAMILNADU
78 DR.T.V.CHITRA 078 coimbatore TAMILNADU
79 DR. NALLURI HIMABINDHU 079 ongole andhra pradesh
80 DR.MYTHILY PRATHIBHA 080 madurai TAMILNADU
81 DR.SARAH ROBERTS O.R 081 coimbatore TAMILNADU
82 DR.WABLE AJAY GOVINDRAO 082 chalisgoon maharashtra
83 DR.JAYANTHI SHANMUGAM PALANISWAMY 083 salem TAMILNADU
84 DR.SHUBANGI ADATE 084 kanpur uthra pradesh
85 DR.AMIRTA SAHA 085 ahmedabad gujarat
86 DR.JOSHI BHAIRAVI RAMESHKUMAR 086 salem TAMILNADU
87 DR.KAVITHA NAGARAJAN 087 - -

90 DR.PRIYADHARSHINI MANOHARAN 090 chennai TAMILNADU
91 DR.ADITI DEODHAR 091 thane maharashtra
92 DR.KONDAPALLI SOWMIYA 092 hyderabad telangana
93 DR.SHANKAR NAIK NUNAVATH 093 khammam telangana
94 DR.SITALAKSHMI VADREVU 094 hydrabad telangana
95 DR.NITHYA .K 095 puducherry TAMILNADU
96 DR.RASHMI YOGISH 096 bangalore karnataka
97 DR.ARCHANA DEVI 097 trichy tamilnadu
98 DR.N.VIJAYALAKSHMI 098 karim nagar telangana
99 DR.BEGARI SUJATHA 099 hyderabad telangana
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
"""

import re
res = []
for line in raw.split('\n'):
    line = line.strip()
    if not line: continue
    
    # Check if first part is a number
    parts = line.split()
    if not parts[0].isdigit():
        continue
    
    sno = int(parts[0])
    
    # Handle the space separated zeros in the first block
    # E.g. "1 DR.DEEPA GANESH 0 0 1 chennai TAMILNADU"
    m_spaced = re.search(r'^(\d+)\s+(.+?)\s+(\d\s+\d\s+\d)\s+(.+?)\s+(.+)$', line)
    if m_spaced:
        name = m_spaced.group(2).strip()
        memNo = m_spaced.group(3).replace(' ', '')
        city = m_spaced.group(4).strip().title()
        state = m_spaced.group(5).strip().title()
        res.append({"sno": sno, "name": name, "memNo": memNo, "city": city, "state": state})
        continue
        
    m_regular = re.search(r'^(\d+)\s+(.+?)\s+(\d{3})\s+(.+?)\s*(TAMILNADU|maharashtra|telangana|karnataka|tamilnadu|andhra pradesh|kerala|haryana|goa|madhya pradesh|west bengal|gujarat|uthra pradesh|\-)\s*$', line, re.IGNORECASE)
    
    if m_regular:
        name = m_regular.group(2).strip()
        memNo = m_regular.group(3)
        city = m_regular.group(4).strip().title()
        state = m_regular.group(5).strip().title()
        if state == '-': 
            state = ''
            if city == '-': city = ''
        res.append({"sno": sno, "name": name, "memNo": memNo, "city": city, "state": state})
        continue

    # Fallback parsing
    # The membership number is usually 3 digits
    m_fallback = re.search(r'^(\d+)\s+(DR\..+?)\s+(0\d{2}|1\d{2})\s+(.+)$', line, re.IGNORECASE)
    if m_fallback:
        name = m_fallback.group(2).strip()
        memNo = m_fallback.group(3)
        rest = m_fallback.group(4).strip()
        # Assume last token is state if single word, or last two if 'pradesh', etc.
        toks = rest.split()
        if toks[-1].lower() in ['pradesh', 'nadu', 'bengal']:
            state = " ".join(toks[-2:]).title()
            city = " ".join(toks[:-2]).title()
        else:
            if toks[-1] == '-':
                state = ''
                city = ''
            else:
                state = toks[-1].title()
                city = " ".join(toks[:-1]).title()
        res.append({"sno": sno, "name": name, "memNo": memNo, "city": city, "state": state})

with open("members.json", "w") as f:
    json.dump(res, f, indent=2)

print("Parsed", len(res), "members.")
