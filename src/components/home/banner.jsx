import "../../styles/home.css";
import image from "/images/Jeremy-r-6.jpg";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-text">
        <span>Jeremy Renner</span>
        <span>
          Not Just a Name — <br /> A Presence That Stays With You
        </span>
      </div>

      <div className="banner-content">
        <span>
          There’s a certain kind of actor you watch and immediately understand.
          Their style is obvious. Their energy is loud. Their appeal is clear
          within seconds.
        </span>
        <span>And then there’s Jeremy Renner.</span>
        <span>
          You don’t fully understand him at first—and that’s exactly what pulls
          you in.
        </span>
        <span>
          Because Renner doesn’t perform at you. He doesn’t demand your
          attention. He doesn’t try to dominate a moment just to prove he can.
          Instead, he exists within it. Quietly. Intentionally. And before you
          know it, you’re leaning in, trying to catch every subtle shift, every
          glance, every pause.
        </span>
        <span>
          That’s his magic.
          <br />
          He doesn’t push energy outward—he draws you inward.
        </span>
      </div>

      <div className="banner-img">
        <img src={image} />
      </div>
    </section>
  );
}
