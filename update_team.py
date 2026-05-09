import json

with open("members.json", "r") as f:
    members = json.load(f)

# Optional: Ensure names follow title case except DR. for cleaner UI
for m in members:
    name_parts = m['name'].split()
    if name_parts[0].upper().startswith("DR"):
        cleaned_name = name_parts[0].upper() + " " + " ".join([p.title() for p in name_parts[1:]])
    else:
        cleaned_name = m['name'].title()
    m['name'] = cleaned_name

table_jsx = """
      {/* ================= MEMBERS DIRECTORY (TABLE) ================= */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              CGSI <span className="text-primary">Members Directory</span>
            </h2>
            <div className="h-px w-24 bg-primary/40 mx-auto mt-4" />
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-border/50 overflow-hidden">
            <div className="overflow-x-auto max-h-[800px] overflow-y-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1a365d] text-white sticky top-0 z-10 shadow-md">
                  <tr>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">S.No</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Doctor Name</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Membership No.</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">City</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider whitespace-nowrap">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {members.map((m, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-6 text-sm font-semibold text-black">{m.sno}</td>
                      <td className="py-4 px-6 text-sm font-bold text-black whitespace-nowrap">{m.name}</td>
                      <td className="py-4 px-6 text-sm font-bold text-primary">CGSI-{str(m.memNo).zfill(3)}</td>
                      <td className="py-4 px-6 text-sm font-semibold text-black">{m.city || "-"}</td>
                      <td className="py-4 px-6 text-sm font-semibold text-black">{m.state || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
"""

with open("/Users/sanjaynaveen/cgsi/src/pages/Team.tsx", "r") as f:
    content = f.read()

content = content.replace('/* PAGE                                     */', f"const members = {json.dumps(members, indent=2)};\n\n/* PAGE                                     */")
content = content.replace("    </Layout>", table_jsx + "\n    </Layout>")

with open("/Users/sanjaynaveen/cgsi/src/pages/Team.tsx", "w") as f:
    f.write(content)

print("Updated Team.tsx")
