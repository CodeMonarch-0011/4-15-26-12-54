import "../../styles/home.css";
import image from "/images/Jeremy-r-3.webp";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">💣 The Hurt Locker Effect</span>

      <div className="rise-main">
        <div className="rise-txt">
          <span>Let’s sit with that moment for a second.</span>
          <span>
            The Hurt Locker isn’t a comfortable film. It’s not designed to
            entertain in a traditional sense. It puts you in a space of tension,
            unpredictability, and psychological strain.
          </span>
          <span>And at the center of it is Renner.</span>
          <span>
            What makes his performance unforgettable isn’t just intensity—it’s
            contradiction.
          </span>
          <span>
            Calm, but reckless. Focused, but addicted to danger. Controlled, yet
            constantly on edge.
          </span>
          <span>
            That complexity is hard to fake. It requires understanding not just
            the character, but the mindset behind the choices.
          </span>
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>

      <div className="rise-main-extra">
        <span>
          Renner didn’t just portray a soldier—he embodied the kind of internal
          conflict that doesn’t have easy explanations.
        </span>
        <span>That’s why it stuck.</span>
        <span>That’s why it still gets talked about.</span>
      </div>
    </section>
  );
}
