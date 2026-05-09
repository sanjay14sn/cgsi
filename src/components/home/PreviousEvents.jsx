"use client";

import React from "react";

const EVENTS = [
  {
    id: 1,
    title: "CGCON 2024",
    category: "1st Cosmetic Gynaecology Conference in South India",
    date: "Day 1",
    image: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771401917/IMG_2891_2_ng3esf.jpg",
  },
  {
    id: 2,
    title: "CGCON 2024",
    category: "1st Cosmetic Gynaecology Conference in South India",
    date: "Day 2",
    image: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771403453/IMG_2892_djcz57.jpg",
  },
  {
    id: 3,
    title: "CGCON 2025",
    category: "2nd Cosmetic Gynaecology Conference in South India",
    date: "Day 1",
    image: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771403826/IMG_1490_li5pye.jpg",
  },
  {
    id: 4,
    title: "CGCON 2025",
    category: "2nd Cosmetic Gynaecology Conference in South India",
    date: "Day 2",
    image: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771403856/DSC07741_zmueoi.jpg",
  },
];

export default function PreviousEvents() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {EVENTS.map((e) => (
            <div key={e.id} className="group cursor-pointer">

              {/* IMAGE CONTAINER - Locked to 16:9 Aspect Ratio */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                <img
                  src={e.image}
                  alt={e.title}
                  /* Using object-contain ensures the FULL image is visible. 
                     The bg-slate-100 acts as a letterbox if the photo is a different shape.
                  */
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* CONTENT AREA - Moved below image for full visibility */}
              <div className="mt-6 flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-tighter bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {e.category}
                    </span>
                    <span className="text-xs font-medium text-blue-600">
                      {e.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {e.title}
                  </h3>
                </div>

                <div className="hidden sm:flex w-12 h-12 items-center justify-center rounded-full border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}

      </div>
    </section>
  );
}