import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">Or Maybe… Just the Beginning</span>

      <span>
        If you’ve made it this far, you already know— <br />
        This isn’t just about celebrating a career. <br />
        It’s about recognizing something rare.
      </span>

      <span>
        A presence that doesn’t fade when the credits roll. A performance style
        that lingers in your mind. A person who doesn’t need to demand attention
        to deserve it.
      </span>

      <span>
        Jeremy Renner isn’t just part of the story. In a lot of ways… He is the
        reason you stay to the end.
      </span>

      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
