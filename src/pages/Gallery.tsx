import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Folder, Image as ImageIcon } from "lucide-react";

import {
  images2024,
  images2025,
} from "./GalleryAlbum";

const albums = [
  {
    id: "2024",
    title: "CGCON 2024",
    description: "1st Cosmetic Gynecology World Congress",
    count: images2024.length,
    cover: "/cg2024-13.jpeg",
    available: true,
  },
  // {
  //   id: "2025",
  //   title: "CGCON 2025",
  //   description: "2nd Cosmetic Gynecology World Congress",
  //   count: images2025.length,
  //   cover:
  //     "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408327/DOT01099_vy0py7.jpg",
  //   available: true,
  // },
  // {
  //   id: "2026",
  //   title: "CGCON 2026",
  //   description: "3rd Cosmetic Gynecology World Congress",
  //   count: 0,
  //   cover: "",
  //   available: false,
  // },
];

const GalleryPage = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-[#f8f8f8]">

        {/* ================= HEADER ================= */}

        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-10 xl:px-12 w-full">

          <div className="w-full max-w-[1700px] mx-auto">

            {/* ================= PAGE TITLE ================= */}

            <div className="text-center mb-14">

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-4">
                Photo Albums
              </h1>

              <p className="text-lg text-muted-foreground">
                Relive the moments from our memorable CGSI events
              </p>

            </div>

            {/* ================= ALBUM CARDS ================= */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
                w-full
              "
            >

              {albums.map((album) => (

                /* =====================================================
                   AVAILABLE ALBUMS - CGCON 2024 & CGCON 2025
                ====================================================== */

                album.available ? (

                  <Link
                    to={`/gallery/${album.id}`}
                    key={album.id}
                    className="group block relative"
                  >

                    {/* ================= FOLDER TAB ================= */}

                    <div
                      className="
                        absolute
                        -top-3
                        left-5
                        w-1/3
                        h-7
                        bg-primary/20
                        rounded-t-xl
                        transition-all
                        duration-300
                        group-hover:bg-primary/40
                      "
                    />

                    {/* ================= CARD ================= */}

                    <div
                      className="
                        relative
                        bg-white
                        rounded-2xl
                        rounded-tl-none
                        overflow-hidden
                        border
                        border-border/60
                        shadow-md
                        transition-all
                        duration-300
                        group-hover:shadow-2xl
                        group-hover:-translate-y-2
                      "
                    >

                      {/* ================= COVER IMAGE ================= */}

                      <div
                        className="
                          relative
                          h-64
                          overflow-hidden
                          bg-slate-100
                        "
                      >

                        <img
                          src={album.cover.replace(
                            "/upload/",
                            "/upload/q_auto,f_auto,w_1200/"
                          )}
                          alt={album.title}
                          loading="eager"
                          decoding="async"
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />

                        {/* ================= DARK GRADIENT ================= */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/70
                            via-black/10
                            to-transparent
                          "
                        />

                        {/* ================= TITLE ================= */}

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            right-0
                            p-6
                            text-white
                          "
                        >

                          <Folder
                            className="w-9 h-9 mb-3 opacity-90"
                            fill="currentColor"
                          />

                          <h2 className="text-2xl md:text-3xl font-bold">
                            {album.title}
                          </h2>

                        </div>

                      </div>

                      {/* ================= CARD DETAILS ================= */}

                      <div className="p-6">

                        <p className="text-slate-600 text-base leading-relaxed mb-5">
                          {album.description}
                        </p>

                        <div className="flex items-center justify-between">

                          {/* PHOTO COUNT */}

                          <div
                            className="
                              flex
                              items-center
                              text-slate-500
                              font-medium
                            "
                          >

                            <ImageIcon className="w-5 h-5 mr-2" />

                            <span>
                              {album.count} Photos
                            </span>

                          </div>

                          {/* VIEW ALBUM */}

                          <span
                            className="
                              text-primary
                              font-bold
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          >
                            View Album →
                          </span>

                        </div>

                      </div>

                    </div>

                  </Link>

                ) : (

                  /* =====================================================
                     CGCON 2026 - COMING SOON
                  ====================================================== */

                  <div
                    key={album.id}
                    className="
                      relative
                      bg-white
                      rounded-2xl
                      rounded-tl-none
                      overflow-hidden
                      border
                      border-border/60
                      shadow-md
                    "
                  >

                    {/* ================= FOLDER TAB ================= */}

                    <div
                      className="
                        absolute
                        -top-3
                        left-5
                        w-1/3
                        h-7
                        bg-primary/20
                        rounded-t-xl
                      "
                    />

                    {/* ================= EMPTY COVER ================= */}

                    <div
                      className="
                        relative
                        h-64
                        bg-gradient-to-br
                        from-primary/5
                        via-white
                        to-secondary/20
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <div className="text-center">

                        <Folder
                          className="
                            w-16
                            h-16
                            mx-auto
                            mb-4
                            text-primary/40
                          "
                          strokeWidth={1.5}
                        />

                        <span
                          className="
                            inline-block
                            px-4
                            py-2
                            rounded-full
                            bg-primary/10
                            text-primary
                            text-sm
                            font-semibold
                          "
                        >
                          Coming Soon
                        </span>

                      </div>

                    </div>

                    {/* ================= CARD DETAILS ================= */}

                    <div className="p-6">

                      <h2
                        className="
                          text-2xl
                          md:text-3xl
                          font-bold
                          text-black
                          mb-3
                        "
                      >
                        {album.title}
                      </h2>

                      <p
                        className="
                          text-slate-600
                          text-base
                          leading-relaxed
                          mb-5
                        "
                      >
                        {album.description}
                      </p>

                      <div
                        className="
                          flex
                          items-center
                          text-slate-400
                          font-medium
                        "
                      >

                        <ImageIcon className="w-5 h-5 mr-2" />

                        <span>
                          Photos coming soon
                        </span>

                      </div>

                    </div>

                  </div>

                )

              ))}

            </div>

          </div>

        </section>

      </div>
    </Layout>
  );
};

export default GalleryPage;