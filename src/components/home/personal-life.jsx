import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";
// import image from "/images/img-8.webp";

export function PersonalLife() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="personal-life">
      <span className="personal-life-hdr">🎶 A Different Kind of Voice</span>
      <div className="personal-life-txt">
        <span>
          Not every actor steps into music and makes it feel authentic. Jeremy
          Renner does.
        </span>

        <span>
          Because he doesn’t treat music like an extension of fame—he treats it
          like an outlet. His sound leans into emotion. Reflection. Personal
          experience.
        </span>

        <span>
          It’s not polished to perfection, and that’s exactly why it works.
          You’re not listening to a persona—you’re listening to a person. And in
          a world where so much is curated and filtered, that kind of honesty
          stands out.
        </span>

        <button onClick={openContactPopup}>Get in Touch</button>
      </div>
    </section>
  );
}
