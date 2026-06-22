import Layout from "@/components/layout/Layout";
import members from "../../members.json";

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
