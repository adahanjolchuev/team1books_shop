import React, { useEffect, useState } from "react";
import "./hero.css";

function HomeHero() {
  const [randomHeaderImg, setRandomHeaderImg] = useState("");

  const imageUrls = [
    "https://media.istockphoto.com/id/1492792958/vector/banner-design-with-push-toys-teddy-bear-plush-bunnies.jpg?s=1024x1024&w=is&k=20&c=bVnS5VqyYLevZAg3ALlRzlge6-062kZqiqgE2taoVIU=",
    "https://media.istockphoto.com/id/1316920204/vector/promo-sale-banner-with-stack-of-books-glasses-blanket-candle-bookstore-bookshop-library-book.jpg?s=2048x2048&w=is&k=20&c=URGh5YFwObwFt15egLZLbcknnh4cEqMp4CFg33AAuO0=",
    "https://media.istockphoto.com/id/1316920207/vector/promo-sale-banner-with-books-decorative-house-potted-plant-bookstore-bookshop-library-book.jpg?s=2048x2048&w=is&k=20&c=vvnWzueY8MKNW9lW36NoLItSq0D1QzOnVyEsi6-JGqk=",
    "https://media.istockphoto.com/id/1600278077/vector/banner-design-with-cat-sitting-with-blanket-and-teacup.jpg?s=2048x2048&w=is&k=20&c=NBdTUSmAth54DCk4NAjyaswlT_7b8ecU8Bcqlg72yPc=",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomHeaderImg(imageUrls[randomIndex]);
  }, []);

  return (
    <>
      <center
        style={{
          marginLeft: "-90px",
          marginTop: "-30px",
        }}
      >
        <div id="hero">
          <div className="container">
            <div className="hero">
              {randomHeaderImg && (
                <img
                  src={randomHeaderImg}
                  alt="Random Header"
                  style={{
                    width: "1530px",
                    height: "510px",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default HomeHero;
