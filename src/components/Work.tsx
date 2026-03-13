import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ShackApp",
    category: "Mobile App",
    tools: "React Native, TypeScript, Stripe",
    image:
      "https://play-lh.googleusercontent.com/tQ0CZlNDskdVdXQea3e5s2_XS2bYGMd9JU0zmox0stLFy-gUX3ualAHf1MBoD61ORZVv=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.apnitor.shackApp&hl=en_IN",
  },
  {
    title: "RareImpacts",
    category: "Web App",
    tools: "React Native, TypeScript, Real-time",
    image: "https://rareimpacts.org/_next/static/media/logo.13477db9.svg",
    link: "https://rareimpacts.org/",
  },
  {
    title: "Online Basket - Grocery App",
    category: "E-commerce App",
    tools: "Flutter, Razorpay, Push Notifications",
    image:
      "https://play-lh.googleusercontent.com/DCcL_QCwALtjmX0d38exY_lHVgxsrJV7-kcTzacgaMyDU-Iel4wFVwbtaJotkMrbLNMu62ce4p8phtsXyxoWVg=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.onlinebasket",
  },
  {
    title: "Online Basket - Warehouse App",
    category: "Operations App",
    tools: "Flutter, Order Processing, Notifications",
    image:
      "https://play-lh.googleusercontent.com/jTxH4t41XhVMWFNlqBzjB2QMpY8Jvv91qmWZ-5b82uW-R-8GfbQpC33dmNuG6Lsj0-1YigCA1MrtvR1mzy59=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.onlinebasketwarehouse",
  },
  {
    title: "Online Basket - Delivery Partner App",
    category: "Logistics App",
    tools: "Flutter, Last Mile, Real-time Updates",
    image:
      "https://play-lh.googleusercontent.com/joR6CVVXpD8GA8bmRMn5fK8x1WgWKFEmJI0EA3eUJqfgNKAMmgpcgUv9SmZkm9TqhlVjoTejkH-KZPr312AV=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.quickbasket.delivery",
  },
  {
    title: "Online Basket - Backend",
    category: "Backend",
    tools: "Node.js, MongoDB, Razorpay",
    image:
      "https://play-lh.googleusercontent.com/wm1OFLcRD7n-M2P7FnW2REEsIGg1BsA-u1hJlCeMA0ztHMZLmkMHBwrQtTnb_Gx3ybyo4vpTvSNXto5BDbSDAA=w526-h296-rw",
  },
  {
    title: "Apnitor Attendance App",
    category: "Mobile App",
    tools: "Flutter, Firebase, Attendance",
    image: "https://apnitor.com/img/logo.png",
  },
  {
    title: "Massive Danamik Attendance App",
    category: "Mobile App",
    tools: "Flutter, Firebase, Attendance",
    image:
      "https://play-lh.googleusercontent.com/dgryS04tIUrOxJarhcUtZsvq2PJQklnohjy0ML30Hj2CU4xiVLT9Wjvki7rY0jswJthFOQSkSIbkMvx_ASZtkw=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.apnitor.massivedynamic",
  },
  {
    title: "IRH - Backend",
    category: "Backend",
    tools: "Python, FastAPI, MySQL, SQLAlchemy",
    image: "https://portal.irhliving.com/uploads/app/logo.png",
    link: "https://portal.irhliving.com/",
  },
  {
    title: "Property Fusion - Backend",
    category: "Backend",
    tools: "Python, FastAPI, MySQL, SQLAlchemy",
    image:
      "https://i0.wp.com/propertyfusion.io/wp-content/uploads/2024/09/header-prop-fusion.png?resize=1024%2C586&ssl=1",
    link: "http://dev.propertyfusion.io/",
  },
  {
    title: "FriendSphere Chatting App",
    category: "Realtime App",
    tools: "Python, Django, MongoDB, WebSocket",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYi-VmZEUyro7LXfyjYpPpw8vh1UcKGUJjg&s",
    link: "https://friendsphere-chatapp.onrender.com/",
  },
  {
    title: "Simple Starts Co Fitness App",
    category: "Fitness App",
    tools: "Flutter, OTP Auth, Nutrition Tracking",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Simple Starts Admin Panel",
    category: "Admin Dashboard",
    tools: "React, Charts, USDA Data",
    image: "https://www.simplestartsco.com/cdn/shop/files/LOGO.png?v=1753370847&width=260",
    link: "http://admin.simplestartsco.com/",
  },
  {
    title: "Simple Starts Backend",
    category: "Backend",
    tools: "Python, FastAPI, DigitalOcean Spaces",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Glowante Partner - Salon Booking App",
    category: "Business App",
    tools: "Flutter, OTP Auth, Bookings",
    image:
      "https://glowante.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9777728b.png&w=256&q=100",
    link: "https://glowante.com/",
  },
  {
    title: "MenuStudio - Digital QR Menu",
    category: "SaaS",
    tools: "FastAPI, React, MongoDB, QR Generator",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
    link: "https://menustudio.onrender.com/",
  },
  {
    title: "Indian Jeera - Jira-Style Workspace",
    category: "Project Management",
    tools: "FastAPI, React, MongoDB, JWT Auth",
    image:
      "https://cdn.dribbble.com/userupload/41893103/file/original-9dc4240e828e04c6d7a11eb1d9f1bdf4.jpg?resize=400x300",
    link: "https://indian-jeera.onrender.com",
  },
  {
    title: "DostLang - Mini Programming Language",
    category: "Developer Tool",
    tools: "JavaScript, Node.js, CLI, Compiler Design",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtdobzHdo5wya_YPMUZ5NnZRtQZhHtVULwQ&s",
    link: "https://dostlang.onrender.com/",
  },
  {
    title: "Baigan - VS Code Terminal Error Audio Alert",
    category: "VS Code Extension",
    tools: "JavaScript, Developer Tools, Productivity",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2502430/extras/3b3307c42c28efebf9acdb9133bf8758.poster.webp?t=1761899319",
    link: "https://marketplace.visualstudio.com/items?itemName=MdKaifee.terminal-error-audio-alert",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
