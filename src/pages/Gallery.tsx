import React from "react";
import Layout from "@/components/layout/Layout";

const galleryImages = [
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408324/83a943f7-cca7-48cd-8906-50ef77cc73b2_3_e8isky.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408323/79ec1af2-98c1-4f41-97c1-1a9a0f5f54db_3_l2gld2.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408322/73b294a4-3026-47f9-ba0f-0c0489a72de6_3_cairep.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408327/DOT01099_vy0py7.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408340/DOT09612_gb0s41.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408343/DSC00013_qhgfu6.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408343/DOT08396_wlbrvi.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408343/DOT01146_jumznb.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408346/DSC00156_clynjk.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408345/DSC00204_hssqvw.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408347/DSC00211_n37f7h.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408348/DSC08137_pehprk.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408354/DSC08580_isqbnj.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408356/DSC08546_mgcbiu.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408360/DSC00256_ri7bbi.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408362/DSC08658_qmqnav.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408369/DSC09006_bepop5.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408368/DSC08883_opfqhu.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408370/DSC08861_duszf9.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/q_auto,f_auto/v1771408371/DSC08569_koxmvs.jpg",
];

const GalleryPage = () => {
  return (
    <Layout>
      <div className="bg-[#f8f8f8] min-h-screen">
        <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
          {/* CSS Columns Masonry — best performance, images keep natural ratio */}
          <div
            style={{
              columnCount: 3,
              columnGap: "1rem",
            }}
            className="block [&>*]:break-inside-avoid [&>*]:mb-4 max-md:![column-count:2] max-sm:![column-count:1]"
          >
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`CGSI Gallery ${index + 1}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 rounded-xl" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GalleryPage;