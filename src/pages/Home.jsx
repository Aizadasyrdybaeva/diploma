import video1 from "../assets/shariki.mp4";

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to our "For You" shop!</h1>

      <iframe
        width="700"
        height="400"
        src={video1}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="eager"
        
      ></iframe>

      <p>
        Friends, are you planning to make a purchase with maximum comfort,
        minimum risks and a favorable price? You were in the right place, at the
        right time. Welcome to us - to the world of online store "For you"!
        Today it is 50.000 products in 400 product categories
      </p>
    </div>
  );
}
