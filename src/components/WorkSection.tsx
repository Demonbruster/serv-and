
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import whopickPosImg from "../assets/images/whopick_pos.png";
import whopickMobileImg from "../assets/images/whopick_mobile.png";

const projects = [
  {
    id: 1,
    title: "Who Pick Pos",
    category: "Business Software",
    image: whopickPosImg,
    description: "designed to streamline retail and service operations. It includes inventory management, Al-powered analytics, customer tracking, and real-time reporting all in one smart platform."
  },
  {
    id: 2,
    title: "Who Pick Mobile (Under Construction)",
    category: "Transportation & Mobility App",
    image: whopickMobileImg,
    description: "A powerful multi-service mobile app built from the ground up to offer ride-hailing, parcel delivery, and food delivery"
  },
  {
    id: 3,
    title: "Project Tracking Tool (Under Construction)",
    category: "Task Management Tools",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Easily manage tasks, timelines, and team collaboration in one place, with real-time updates, progress tracking, and smart tools to keep every project on schedule and every team aligned."
  },
];

const clients = [
  { 
    name: "Innovatech", 
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    link: "https://example.com/innovatech"
  },
  { 
    name: "FutureWave", 
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    link: "https://example.com/futurewave"
  },
  { 
    name: "NexaCorp", 
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    link: "https://example.com/nexacorp"
  },
  { 
    name: "Quantum Industries", 
    logo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    link: "https://example.com/quantum"
  },
  { 
    name: "Vivid Systems", 
    logo: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    link: "https://example.com/vivid"
  },
  { 
    name: "ProtonTech", 
    logo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    link: "https://example.com/proton"
  },
  { 
    name: "Horizon Inc", 
    logo: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    link: "https://example.com/horizon"
  },
  { 
    name: "Apex Partners", 
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    link: "https://example.com/apex"
  }
];

const WorkSection = () => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const handleNext = () => {
    setCurrentSliderIndex((prev) => (prev + 1) % projects.length);
  };
  
  const handlePrev = () => {
    setCurrentSliderIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Auto-scroll effect for the client logos carousel
  useEffect(() => {
    let interval: number | undefined;
    
    if (autoPlayEnabled) {
      interval = window.setInterval(() => {
        const carouselElement = document.querySelector('[data-carousel="clients"]');
        if (carouselElement) {
          const scrollAmount = carouselElement.scrollWidth / clients.length;
          carouselElement.scrollLeft += scrollAmount;
          
          // Reset scroll position when reaching the end
          if (carouselElement.scrollLeft > carouselElement.scrollWidth - carouselElement.clientWidth - 10) {
            carouselElement.scrollLeft = 0;
          }
        }
      }, 3000);
    }
    
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [autoPlayEnabled]);
  
  return (
    <section id="work" className="py-24 px-6 bg-charcoal-light relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "section-heading",
            inView ? "after:scale-x-100" : "after:scale-x-0"
          )}>
            Our Work
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-pearl-dark">
            Explore our portfolio of innovative projects and solutions that have transformed businesses.
          </p>
          
          {/* View toggle */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-full transition-all ${viewMode === 'carousel' ? 'bg-coral text-white' : 'bg-white/10 text-pearl-dark'}`}
            >
              Carousel View
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-coral text-white' : 'bg-white/10 text-pearl-dark'}`}
            >
              Grid View
            </button>
          </div>
        </div>
        
        {viewMode === 'carousel' ? (
          // Carousel View
          <div className="relative overflow-hidden mb-20">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSliderIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div 
                    className="glass-card overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-coral text-sm font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                      <p className="text-pearl-dark line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider controls */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-charcoal/60 hover:bg-charcoal backdrop-blur-sm p-3 rounded-full text-pearl hover:text-coral"
              onClick={handlePrev}
            >
              <ArrowLeft size={24} />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-charcoal/60 hover:bg-charcoal backdrop-blur-sm p-3 rounded-full text-pearl hover:text-coral"
              onClick={handleNext}
            >
              <ArrowRight size={24} />
            </button>
            
            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentSliderIndex ? "bg-coral w-6" : "bg-pearl-dark/30 hover:bg-pearl-dark/60"
                  )}
                  onClick={() => setCurrentSliderIndex(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          // Grid View with Pagination
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((project) => (
                <div 
                  key={project.id}
                  className="glass-card overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-coral text-sm font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-pearl-dark line-clamp-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-10">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        onClick={() => paginate(index + 1)} 
                        isActive={currentPage === index + 1}
                        className="bg-charcoal/60 hover:bg-charcoal/80 border-white/10"
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        )}
        
        {/* Client logos - Improved with auto-scrolling carousel */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Trusted By</h3>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
              onMouseEnter={() => setAutoPlayEnabled(false)}
              onMouseLeave={() => setAutoPlayEnabled(true)}
            >
              <CarouselContent data-carousel="clients" className="py-4">
                {clients.map((client) => (
                  <CarouselItem key={client.name} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <a 
                      href={client.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-card p-4 h-24 flex flex-col items-center justify-center group transition-all duration-300 hover:scale-105"
                    >
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-pearl mr-1">{client.name}</span>
                        <ExternalLink size={12} className="text-coral" />
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex left-0 bg-charcoal/60 hover:bg-charcoal backdrop-blur-sm text-pearl hover:text-coral" />
              <CarouselNext className="hidden md:flex right-0 bg-charcoal/60 hover:bg-charcoal backdrop-blur-sm text-pearl hover:text-coral" />
            </Carousel>
            
            {/* Auto-scroll indicator */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1 mt-2">
              <div className={`h-1 w-8 rounded-full transition-all duration-500 ${autoPlayEnabled ? 'bg-coral' : 'bg-pearl-dark/30'}`}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project lightbox */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-charcoal-light border-white/10 max-w-4xl">
          {selectedProject && (
            <div>
              <div className="aspect-video overflow-hidden rounded-t-lg mb-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-coral text-sm font-semibold uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{selectedProject.title}</h3>
              <p className="text-pearl-dark mb-6">{selectedProject.description}</p>
              <div className="flex justify-end">
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkSection;
