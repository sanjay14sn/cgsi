import json

with open("members.json", "r") as f:
    members = json.load(f)

# Rebuild Team.tsx
content = f"""import Layout from "@/components/layout/Layout";

/* -------------------------------------------------------------------------- */
/* DATA                                     */
/* -------------------------------------------------------------------------- */

const members = {json.dumps(members, indent=2)};

/* -------------------------------------------------------------------------- */
/* PAGE                                     */
/* -------------------------------------------------------------------------- */

const Team = () => {{
  return (
    <Layout>
      {{/* Global Background Mesh */}}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      {{/* ================= MEMBERS DIRECTORY (TABLE) ================= */}}
      <section className="pt-32 pb-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              CGSI <span className="text-primary italic">Members Directory</span>
            </h2>
            <div className="h-px w-24 bg-primary/40 mx-auto mt-6" />
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
                  {{members.map((m, idx) => (
                    <tr key={{idx}} className="hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-6 text-sm font-semibold text-black">{{m.sno}}</td>
                      <td className="py-4 px-6 text-sm font-bold text-black whitespace-nowrap">{{m.name}}</td>
                      <td className="py-4 px-6 text-sm font-bold text-primary">CGSI-{{String(m.memNo).padStart(3, '0')}}</td>
                      <td className="py-4 px-6 text-sm font-semibold text-black">{{m.city || "-"}}</td>
                      <td className="py-4 px-6 text-sm font-semibold text-black">{{m.state || "-"}}</td>
                    </tr>
                  ))}}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}};

export default Team;
"""

with open("src/pages/Team.tsx", "w") as f:
    f.write(content)

