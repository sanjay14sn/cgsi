with open("src/pages/Team.tsx", "r") as f:
    lines = f.readlines()

out = []
skip = False
for i, line in enumerate(lines):
    if line.strip() == 'import { motion, Variants } from "framer-motion";':
        continue
    
    if line.startswith("const fadeInUp: Variants = {"):
        skip = True
    
    if skip and line.startswith("};"):
        skip = False
        continue
    
    if skip:
        continue
    
    if line.strip() == '{/* ================= HERO SECTION ================= */}':
        skip = True
    
    if skip and line.strip() == '</section>':
        skip = False
        continue
        
    out.append(line)

with open("src/pages/Team.tsx", "w") as f:
    f.writelines(out)

print("Cleaned up Team.tsx")
