import React, { useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";


const categories = [
  { id: "all", name: "All" },
  { id: "cat-1", name: "Hinged Wardrobes" },
  { id: "cat-2", name: "Sliding Wardrobes" },
  { id: "cat-3", name: "Walk in Wardrobes" },
  { id: "cat-4", name: "Loft Wardrobes" },
  { id: "cat-5", name: "Storage" },
];


const items = [
  {
    id: 1,
    category: "cat-1",
    title: "Bifold Wardrobes",
    p: "We customize hinged folding wardrobe doors in various finishes, including wood, mirror, matte, laminate, and routed shutters. For a modern touch, choose metal-framed shutters with glass panels.",
    image: "assets/images/gallery/pic1.jpg",
  },
  {
    id: 2,
    category: "cat-2",
    title: "Built In Sliding Wardrobes",
    p: "Perfect Interior offers the ideal storage solution for your dream home. When it comes to bedroom storage, choose between sliding and hinged wardrobes.",
    image: "assets/images/gallery/pic2.jpg",
  },
  {
    id: 3,
    category: "cat-3",
    title: "Luxury Walk In Wardrobes",
    p: "We offer a wide range of classic Linear Walk-in Fitted Wardrobes, tailored to your needs, with a convenient and reliable service to deliver your luxury wardrobe quickly.",
    image: "assets/images/gallery/pic3.jpg",
  },
  {
    id: 4,
    category: "cat-4",
    title: "Loft Storage Solution",
    p: "We offer a range of styles for under stairs and loft storage conversions, tailored to your needs, creating bespoke spaces without sacrificing room in your home.",
    image: "assets/images/gallery/pic4.jpg",
  },
  {
    id: 5,
    category: "cat-5",
    title: "Kitchen Storage",
    p: "Kitchens are the heart of a home, and Inspired Elements offers top-quality, bespoke kitchen storage solutions with premium materials and a wide range of colors and finishes, serving London and the UK.",
    image: "assets/images/gallery/pic5.jpg",
  },
  {
    id: 6,
    category: "cat-1",
    title: "Hinged Wardrobes",
    p: "Our fitted hinged wardrobe system offers modularity with bespoke finishes, seamlessly matching living rooms, bedrooms, and bed units.",
    image: "assets/images/gallery/pic6.jpg",
  },
  {
    id: 7,
    category: "cat-3",
    title: "Small Walk In Wardrobes",
    p: "We offer luxury small walk-in wardrobes with drawers for bedrooms, dressing rooms, cloakrooms, and lofts, complete with a range of accessories to fit any space.",
    image: "assets/images/gallery/pic7.jpg",
  },
  {
    id: 8,
    category: "cat-4",
    title: "Attic Wardrobes",
    p: "Design your bespoke Framed Glass Fitted Wardrobes at Inspired Elements, with long profile thin frame panels in finishes like polished, gloss, and silver-white, adding a royal touch to your modern wardrobe.",
    image: "assets/images/gallery/pic4.jpg",
  },
  {
    id: 9,
    category: "cat-2",
    title: "Wooden Sliding Wardrobes",
    p: "Sliding doors are the most popular wardrobe choice in the UK, offering veneer finishes and customizable internal storage.",
    image: "assets/images/gallery/pic8.jpg",
  },
  {
    id: 10,
    category: "cat-1",
    title: "Glass Wardrobes",
    p: "We offer Soft-close German Hinges for durable hinged glass wardrobe doors. Our made-to-measure system is versatile, with high-quality accessories built to last.",
    image: "assets/images/gallery/pic9.jpg",
  },
  {
    id: 11,
    category: "cat-5",
    title: "Living Room Storage",
    p: "The living room is the heart of the home, and Inspired Elements helps you create beautiful storage units that showcase your design sense, making your living room a true reflection of your style.",
    image: "assets/images/gallery/pic5.jpg",
  },
  {
    id: 12,
    category: "cat-2",
    title: "Glass Sliding Wardrobes",
    p: "Mirrored sliding wardrobes at Inspired Elements blend glass elegance with sleek sliders, offering custom-built options that maximize space and enhance style.",
    image: "assets/images/gallery/pic9.jpg",
  },
  {
    id: 13,
    category: "cat-3",
    title: "Modern Walk In Wardrobes",
    p: "The modern wardrobe is the dream for style-conscious individuals, featuring a spacious dresser area with stylish lighting. We offer the perfect solution to create a highly organized space.",
    image: "assets/images/gallery/pic9.jpg",
  },
  {
    id: 14,
    category: "cat-4",
    title: "Loft Conversion",
    p: "Our Loft Storage Solutions are tailored for sloped roofs, maximizing space with bespoke wardrobes that fit perfectly in your loft or attic bedroom.",
    image: "assets/images/gallery/pic4.jpg",
  },
  {
    id: 15,
    category: "cat-5",
    title: "Fitted Wardrobe Storage",
    p: "The living room is the heart of the home, and Inspired Elements helps you create beautiful storage units that showcase your design sense, making your living room a true reflection of your style.",
    image: "assets/images/gallery/pic5.jpg",
  },
];

const FittedWardrobes = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);
  return (
    <div className="page-wraper">
      <Navbar />

      <div className="page-content">
        {/* <!-- CONTENT START --> */}
        <div className="page-content">
          {/* <!-- INNER PAGE BANNER --> */}
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(assets/images/banner/2.jpg)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">fitted wardrobes</h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->                             */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Fitted Furniture</li>
                    <li>fitted wardrobes</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END -->                         */}
              </div>
            </div>
          </div>
          {/* <!-- INNER PAGE BANNER END --> */}

          {/* <!-- SECTION CONTENT START --> */}
          <div className="section-full p-t80 p-b50 bg-gray">
            <div className="container">
              <div className="filter-wrap p-b30">
                <ul className="masonry-filter link-style text-uppercase masonry-filter1">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={activeCategory === cat.id ? "active" : ""}
                    >
                      <a onClick={() => setActiveCategory(cat.id)}>
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`masonry-item ${item.category} col-lg-4 col-md-6 col-sm-12 m-b30`}
                  >
                    <div className="project-img-effect-1">
                      <img src={item.image} alt={item.title} />
                      <div className="wt-info">
                        <h4 className="wt-tilte text-white m-b10 m-t0">
                          {item.title}
                        </h4>
                        <p>{item.p}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- SECTION CONTENT END  --> */}

          {/* text start  */}
          <div className="container mt-5 mb-5">
            <div className="project-detail-outer">
              <div className="project-detail-containt">
                <div className="bg-white text-black">
                  <h3>Built In Fitted Wardrobes</h3>
                  <h3>
                    Custom Built-In Fitted Wardrobes Tailored to Your Space in
                    London and the Home Counties – From Craft My Space
                  </h3>
                  <p>
                    A wardrobe is second only to the bed in room decor.
                    Available in 2-, 3-, and 4-door models, or as compartments
                    built into niches or walls, wardrobes help organize and
                    enhance your space. These custom wardrobes not only offer
                    functionality but also reflect the style and design of your
                    room. With Craft My Space, you can order a tailored fitted
                    wardrobe for your bedroom, hallway, or living room.
                  </p>
                  <h3>Your Reliable Home Assistant</h3>
                  <p>
                    The hallmark of Craft My Space is our innovative systems for
                    organizing storage. Our bespoke fitted wardrobes are
                    designed to be your reliable home assistant, combining
                    functionality with style. These wardrobes offer:
                 
                  <ul className="mt-3">
                    <li>Dependable, safe operation</li>
                    <li>User-friendly with numerous practical solutions</li>
                    <li>Seamless integration with your existing interior</li>
                    <li>
                      Time-saving organization, keeping everything within reach
                    </li>
                    <li>
                      Thoughtful design that ensures every detail is
                      meticulously considered.
                    </li>
                  </ul>
                  </p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <a href=""    style={{
                      background: "#141b1f",
                      color: "white",
                      padding: "20px",
                    }}>Get A Quote</a>
                </div>
              </div>
            </div>

          </div>
          {/* text end  */}
        </div>
        {/* <!-- CONTENT END --> */}
      </div>

      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </div>
  );
};

export default FittedWardrobes;
