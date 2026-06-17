import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowLeft, FolderOpen } from "lucide-react";

export const images2024 = [
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407207/IMG_1490_qbsycl.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407195/IMG_2914_agmgkd.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407196/IMG_2912_igfpzl.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407194/IMG_2909_wvc2px.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407192/IMG_2913_aggpe9.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407190/IMG_2908_qljo9j.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407189/IMG_2906_tdwzap.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407188/IMG_2904_wpzv7j.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407185/IMG_2902_v8pfzs.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407186/IMG_2905_rafj0b.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407185/IMG_2903_hdgfos.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407182/IMG_2891_m64yaa.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407180/IMG_2901_bsaxio.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407179/IMG_2892_ga1ufo.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407177/IMG_2891_2_bdggux.jpg"
];

export const images2025 = [
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408324/83a943f7-cca7-48cd-8906-50ef77cc73b2_3_e8isky.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408323/79ec1af2-98c1-4f41-97c1-1a9a0f5f54db_3_l2gld2.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408322/73b294a4-3026-47f9-ba0f-0c0489a72de6_3_cairep.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408327/DOT01099_vy0py7.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408340/DOT09612_gb0s41.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DSC00013_qhgfu6.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DOT08396_wlbrvi.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DOT01146_jumznb.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408346/DSC00156_clynjk.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408345/DSC00204_hssqvw.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408347/DSC00211_n37f7h.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408348/DSC08137_pehprk.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408354/DSC08580_isqbnj.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408356/DSC08546_mgcbiu.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408360/DSC00256_ri7bbi.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408362/DSC08658_qmqnav.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408369/DSC09006_bepop5.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408368/DSC08883_opfqhu.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408370/DSC08861_duszf9.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408371/DSC08569_koxmvs.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408376/DSC08636_zqzugz.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408381/DSC09829_dk5uk1.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408384/DSC09694_gx3swj.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408400/DSC09904_lu7xvu.jpg"
];

export const imagesModernAestheticGynecology = [
    "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676699/71787968-1405-4b80-ac38-1ffa0d1e81ec_zktrd1.jpg",
    "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676681/9770fe90-8912-4fa3-a770-3d506cee046f_yrugga.jpg",
    "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676666/de2a622e-630a-4534-ae38-03715e2dea7b_ikwgd0.jpg",
    "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676651/728c8d21-edc2-4606-b35b-1d00f4d53cf1_mvd4bm.jpg",
    "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676638/30b0545e-8f2a-4175-ad85-057fa1ed6c3f_fgm3mc.jpg",
];

export const allPhotos = [...images2025, ...images2024, ...imagesModernAestheticGynecology];

const GalleryAlbum = () => {
  const { albumId } = useParams();

  let imagesToDisplay = [];
  let title = "";

  if (albumId === "2025") {
    imagesToDisplay = images2025;
    title = "CGCON 2025";
  } else if (albumId === "2024") {
    imagesToDisplay = images2024;
    title = "CGCON 2024";
  } else if (albumId === "modern-aesthetic-gynecology") {
    imagesToDisplay = imagesModernAestheticGynecology;
    title = "Modern Aesthetic Gynecology";
  } else if (albumId === "all") {
    imagesToDisplay = allPhotos;
    title = "All Photos";
  } else {
    // If not a valid route, return to home or gallery
    return <Navigate to="/gallery" />;
  }

  return (
    <Layout>
      <div className="bg-[#f8f8f8] min-h-screen">
        <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
          
          <div className="flex flex-col items-center mb-12">
            <Link to="/gallery" className="flex items-center gap-2 text-primary font-bold self-start mb-6 hover:underline">
              <ArrowLeft className="w-5 h-5" />
              Back to Albums
            </Link>
            
            <div className="flex items-center gap-3">
              <FolderOpen className="text-secondary w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-black">{title}</h1>
            </div>
            <p className="text-muted-foreground mt-4 font-medium">
              {imagesToDisplay.length} Photos Overview
              {albumId === "modern-aesthetic-gynecology" && (
                <span className="block text-sm mt-1">
                  Marriott, Chennai · Monthly CME on menopause care &amp; aesthetic gynecology
                </span>
              )}
            </p>
          </div>

          {/* CSS Columns Masonry */}
          <div
            style={{
              columnCount: 3,
              columnGap: "1rem",
            }}
            className="block [&>*]:break-inside-avoid [&>*]:mb-4 max-md:![column-count:2] max-sm:![column-count:1]"
          >
            {imagesToDisplay.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={src.replace('/upload/', '/upload/q_auto,f_auto/')}
                  alt={`${title} - Photo ${index + 1}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 rounded-xl" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GalleryAlbum;
