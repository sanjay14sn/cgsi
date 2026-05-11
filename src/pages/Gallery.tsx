import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Folder, Image as ImageIcon } from "lucide-react";
import { images2024, images2025, allPhotos } from "./GalleryAlbum";

const albums = [
  {
    id: "all",
    title: "All Photos",
    count: allPhotos.length,
    cover: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408323/79ec1af2-98c1-4f41-97c1-1a9a0f5f54db_3_l2gld2.jpg"
  },
  {
    id: "2025",
    title: "CGCON 2025",
    count: images2025.length,
    cover: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408327/DOT01099_vy0py7.jpg"
  },
  {
    id: "2024",
    title: "CGCON 2024",
    count: images2024.length,
    cover: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407195/IMG_2914_agmgkd.jpg"
  }
];

const GalleryPage = () => {
  return (
    <Layout>
      <div className="bg-[#f8f8f8] min-h-screen">
        <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-4">Photo Albums</h1>
            <p className="text-lg text-muted-foreground">Relive the moments from our historic events</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {albums.map((album) => (
              <Link 
                to={`/gallery/${album.id}`} 
                key={album.id}
                className="group block relative"
              >
                {/* Folder background tab effect */}
                <div className="absolute -top-3 left-4 w-1/3 h-6 bg-primary/20 rounded-t-xl transition-colors duration-300 group-hover:bg-primary/40"></div>
                
                <div className="relative bg-white rounded-2xl rounded-tl-none shadow-md overflow-hidden border border-border group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  
                  {/* Cover image area */}
                  <div className="relative h-56 md:h-64 overflow-hidden bg-slate-100">
                    <img 
                      src={album.cover.replace('/upload/', '/upload/q_auto,f_auto,w_800/')} 
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <Folder className="w-8 h-8 mb-2 opacity-80" fill="currentColor" />
                        <h2 className="text-2xl font-bold">{album.title}</h2>
                      </div>
                    </div>
                  </div>

                  {/* Album details */}
                  <div className="p-5 flex items-center justify-between bg-white">
                    <div className="flex items-center text-slate-500 font-medium">
                      <ImageIcon className="w-5 h-5 mr-2" />
                      <span>{album.count} Items</span>
                    </div>
                    <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">
                      View Album &rarr;
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GalleryPage;
