import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowLeft, FolderOpen, X } from "lucide-react";

export const images2024 = [
  // Existing images
  "/cg2024-5.jpeg",
  "/cg2024-6.jpeg",
  "/cg2024-18.jpeg",
  "/cg2024-16.jpeg",
  "/cg2024-14.jpeg",
  "/cg2024-15.jpeg",
  "/cg2024-11.jpeg",
  "/cg2024-10.jpeg",
  "/cg2024-17.jpeg",
  "/cg2024-7.jpeg",
  "/cg2024-8.jpeg",
  "/cg2024-9.jpeg",
  "/cg2024-1.jpeg",
  "/cg2024-2.jpeg",
  "/cg2024-3.jpeg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407188/IMG_2904_wpzv7j.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407185/IMG_2902_v8pfzs.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407180/IMG_2901_bsaxio.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407195/IMG_2914_agmgkd.jpg",
  "/cg2024-13.jpeg",
  "/cg2024-26.jpeg",
  "/cg2024-24.jpeg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407196/IMG_2912_igfpzl.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407194/IMG_2909_wvc2px.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407192/IMG_2913_aggpe9.jpg",
  // "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407190/IMG_2908_qljo9j.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407189/IMG_2906_tdwzap.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407179/IMG_2892_ga1ufo.jpg",
  "/cg2024-4.jpeg",
  "/cg2024-12.jpeg",
  "/cg2024-20.jpeg",
  "/cg2024-21.jpeg",
  "/cg2024-22.jpeg",
  "/cg2024-23.jpeg",
  "/cg2024-25.jpeg",
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
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408400/DSC09904_lu7xvu.jpg",
];

export const imagesModernAestheticGynecology = [
  "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781694504/WhatsApp_Image_2026-06-17_at_4.36.08_PM_nyabqr.jpg",
  "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676699/71787968-1405-4b80-ac38-1ffa0d1e81ec_zktrd1.jpg",
  "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676681/9770fe90-8912-4fa3-a770-3d506cee046f_yrugga.jpg",
  "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676666/de2a622e-630a-4534-ae38-03715e2dea7b_ikwgd0.jpg",
  "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676651/728c8d21-edc2-4606-b35b-1d00f4d53cf1_mvd4bm.jpg",
  "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676638/30b0545e-8f2a-4175-ad85-057fa1ed6c3f_fgm3mc.jpg",
];

export const allPhotos = [
  ...images2025,
  ...images2024,
  ...imagesModernAestheticGynecology,
];

const GalleryAlbum = () => {
  const { albumId } = useParams();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  let imagesToDisplay: string[] = [];
  let title = "";
  let subtitle = "";

  if (albumId === "2025") {
    imagesToDisplay = images2025;
    title = "CGCON 2025";
  } else if (albumId === "2024") {
    imagesToDisplay = images2024;
    title = "CGCON 2024";
  } else if (albumId === "modern-aesthetic-gynecology") {
    imagesToDisplay = imagesModernAestheticGynecology;
    title = "Modern Aesthetic Gynecology";
    subtitle =
      "Marriott, Madurai · Monthly CME on menopause care & aesthetic gynecology";
  } else if (albumId === "all") {
    imagesToDisplay = allPhotos;
    title = "All Photos";
  } else {
    return <Navigate to="/gallery" />;
  }

  /*
   * Close modal when pressing Escape
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  return (
    <Layout>
      <div className="bg-[#f8f8f8] min-h-screen">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12">

          <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">

            {/* Back Button */}

            <Link
              to="/gallery"
              className="
                inline-flex
                items-center
                gap-2
                text-primary
                font-bold
                mb-8
                hover:underline
                transition-all
              "
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Albums
            </Link>

            {/* Album Heading */}

            <div className="flex flex-col items-center text-center">

              <div className="flex items-center justify-center gap-3">

                <FolderOpen
                  className="text-secondary w-7 h-7 sm:w-8 sm:h-8"
                />

                <h1
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    font-serif
                    font-bold
                    text-black
                  "
                >
                  {title}
                </h1>

              </div>

              <p className="text-muted-foreground mt-4 font-medium">
                {imagesToDisplay.length} Photos Overview
              </p>

              {subtitle && (
                <span className="block text-sm mt-2 text-muted-foreground">
                  {subtitle}
                </span>
              )}

            </div>

          </div>
        </section>

        {/* =====================================================
            PHOTO GRID
        ====================================================== */}

        <section className="pb-20">

          <div
            className="
              w-full
              max-w-[1700px]
              mx-auto
              px-4
              sm:px-6
              lg:px-10
              xl:px-12
            "
          >

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
                sm:gap-5
                lg:gap-6
                w-full
                items-start
              "
            >

              {imagesToDisplay.map((src, index) => {

                const optimizedSrc = src.startsWith("/")
                  ? src
                  : src.replace(
                    "/upload/",
                    "/upload/q_auto,f_auto,w_1400/"
                  );

                return (
                  <div
                    key={`${albumId}-${index}`}
                    onClick={() => setSelectedImage(optimizedSrc)}
                    className="
                      relative
                      overflow-hidden
                      rounded-xl
                      group
                      cursor-pointer
                      bg-white
                      shadow-sm
                      w-full
                    "
                  >

                    <img
                      src={optimizedSrc}
                      alt={`${title} - Photo ${index + 1}`}
                      loading={index < 6 ? "eager" : "lazy"}
                      decoding="async"
                      className="
                        block
                        w-full
                        aspect-[4/3]
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-[1.02]
                      "
                    />

                    {/* Hover overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/0
                        group-hover:bg-black/15
                        transition-colors
                        duration-300
                        pointer-events-none
                      "
                    />

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* =====================================================
            FULL SCREEN IMAGE MODAL
        ====================================================== */}

        {selectedImage && (
          <div
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/95
              flex
              items-center
              justify-center
              p-4
              sm:p-6
              md:p-10
            "
            onClick={() => setSelectedImage(null)}
          >

            {/* Close Button */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="
                absolute
                top-5
                right-5
                sm:top-7
                sm:right-7
                z-50
                w-12
                h-12
                rounded-full
                bg-black/50
                border
                border-white/30
                text-white
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition-all
                duration-200
              "
            >
              <X className="w-7 h-7" />
            </button>

            {/* Full Image */}

            <img
              src={selectedImage}
              alt="Full screen preview"
              onClick={(event) => event.stopPropagation()}
              className="
                max-w-full
                max-h-[92vh]
                w-auto
                h-auto
                object-contain
                rounded-md
                shadow-2xl
                select-none
              "
            />

          </div>
        )}

      </div>
    </Layout>
  );
};

export default GalleryAlbum;