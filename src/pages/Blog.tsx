
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const categories = [
    "All",
    "Technology",
    "Design",
    "Business",
    "Company News",
    "Case Studies"
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt: "Exploring upcoming trends in web development, from AI-driven development to WebAssembly and beyond.",
      category: "Technology",
      date: "May 5, 2025",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Designing for Accessibility: A Comprehensive Guide",
      excerpt: "How to ensure your digital products are accessible to all users, including those with disabilities.",
      category: "Design",
      date: "April 28, 2025",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Case Study: How We Rebuilt FinTech App to Scale to 10M Users",
      excerpt: "An in-depth look at our process for redesigning and rebuilding a fintech application to handle massive scale.",
      category: "Case Studies",
      date: "April 15, 2025",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "SERVAND Announces Strategic Partnership with Tech Giant",
      excerpt: "Exciting news about our latest partnership and what it means for our clients and products.",
      category: "Company News",
      date: "April 3, 2025",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Building a Data-Driven Culture in Your Organization",
      excerpt: "Strategies for fostering a data-centric approach to decision-making across all departments.",
      category: "Business",
      date: "March 22, 2025",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing and What It Means for Your Applications",
      excerpt: "Understanding edge computing and how it's reshaping application architecture for better performance.",
      category: "Technology",
      date: "March 10, 2025",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png",
      readTime: "8 min read"
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout 
      title="Blog" 
      description="Stay up-to-date with the latest insights, tutorials, and company news from the SERVAND team."
    >
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="wave-bg"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-coral">Insights</span>
            </h1>
            <p className="text-pearl-dark text-lg mb-8">
              Thoughts, ideas, and perspectives from our team of experts on design, technology, business, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-charcoal border border-white/10 p-3 px-4 rounded-lg outline-none focus:ring-1 focus:ring-coral"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category 
                      ? 'bg-coral text-white' 
                      : 'bg-charcoal text-pearl-dark hover:bg-charcoal-light hover:text-pearl'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <div key={post.id} className="glass-card overflow-hidden flex flex-col h-full">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-coral text-white px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center text-sm text-pearl-dark mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-pearl-dark mb-6">{post.excerpt}</p>
                    <a href={`/blog/${post.id}`} className="mt-auto text-coral hover:text-coral/80 flex items-center gap-2 font-medium transition-colors">
                      Read More <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
                <p className="text-pearl-dark">Try changing your search query or filter selection</p>
              </div>
            )}
          </div>
          
          {/* Newsletter Subscribe */}
          <div className="mt-20 bg-charcoal rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Subscribe to our newsletter</h3>
                <p className="text-pearl-dark">Get the latest insights, articles, and news delivered to your inbox weekly.</p>
              </div>
              <div className="w-full md:w-1/3">
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-charcoal-light border border-white/10 p-3 px-4 rounded-l-lg flex-1 outline-none focus:ring-1 focus:ring-coral"
                  />
                  <button className="bg-coral text-white p-3 rounded-r-lg hover:bg-coral/90 transition-colors flex items-center">
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
