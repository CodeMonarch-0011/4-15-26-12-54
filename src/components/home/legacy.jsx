import "../../styles/home.css";
import image from "/images/Jeremy-r.jpg";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">🤝 The Loyalty Factor</span>

      <div className="legacy-main">
        <div className="legacy-main-txt">
          <span>
            Fans don’t just follow Jeremy Renner—they stick with him. And that
            kind of loyalty isn’t accidental.
          </span>

          <div>
            <span>It’s built on trust.</span>

            <ul>
              <li>Trust that he’ll bring something real to every role</li>

              <li>Trust that he won’t take shortcuts with his craft</li>

              <li>
                Trust that who you see publicly isn’t a manufactured version
              </li>
            </ul>
          </div>

          <span>
            There’s consistency there. <br />
            And in an industry where things change fast, consistency becomes
            something people hold onto.
          </span>
        </div>

        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
