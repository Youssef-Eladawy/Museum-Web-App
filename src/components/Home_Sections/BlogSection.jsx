import { Calendar, ThumbsUp, MessageCircle, Link2 } from "lucide-react";
import MainHeader from "../MainHeader";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      date: "28 Jan 2050",
      likes: "1.7K",
      comments: "2.4K",
      author: "Royal Hamblin",
      title: "Adventures Trip",
      desc: "Embark on an exciting adventure through stunning landscapes and unforgettable moments.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      date: "15 May 2050",
      likes: "3.4K",
      comments: "2.9K",
      author: "Matthew Harris",
      title: "Hiking Trip",
      desc: "Discover the beauty of nature on an exciting hiking adventure with us.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
      date: "10 July 2050",
      likes: "1.2K",
      comments: "2.3K",
      author: "Thomas Brian",
      title: "Ski Trip",
      desc: "Hit the slopes for an exhilarating adventure with breathtaking mountain views.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <MainHeader title="Our Blog" />

        <h1 className="text-3xl font-bold mb-4">Popular Travel Blogs</h1>

        <p className="text-gray-600 text-lg">
          Stay inspired with our collection of travel stories, tips, and
          destination highlights. Whether you're looking for adventure guides,
          travel hacks, or destination recommendations, our blog offers expert
          insights to help you plan your next journey.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-xl shadow-xl bg-white overflow-hidden"
          >
            <div className="relative group h-64 overflow-hidden">
              <img
                src={blog.img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Link2 size={48} className="text-white" />
              </div>

              <div className="absolute bottom-0 w-full bg-white/30 backdrop-blur-sm text-white border-y border-white/50 flex text-sm">
                <div className="flex-1 py-3 px-2 border-r border-white/50 flex items-center justify-center gap-2">
                  <Calendar size={18} className="text-primary shrink-0" />
                  <span className="whitespace-nowrap">{blog.date}</span>
                </div>

                <div className="flex-1 py-3 px-2 border-r border-white/50 flex items-center justify-center gap-2">
                  <ThumbsUp size={18} className="text-primary shrink-0" />
                  <span className="whitespace-nowrap">{blog.likes}</span>
                </div>

                <div className="flex-1 py-3 px-2 flex items-center justify-center gap-2">
                  <MessageCircle size={18} className="text-primary shrink-0" />
                  <span className="whitespace-nowrap">{blog.comments}</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-b-xl">
              <p className="text-gray-600 text-sm mb-2">
                Posted By: {blog.author}
              </p>

              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>

              <p className="text-gray-600 mb-4">{blog.desc}</p>

              <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/80 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
