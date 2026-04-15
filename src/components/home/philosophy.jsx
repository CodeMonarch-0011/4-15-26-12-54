import "../../styles/home.css";
import image from "/images/Jeremy-r-2.jpg";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">💥 When Reality Hits Hard</span>

      <div className="philosophy-main">
        <div className="philosophy-list">
          <span>
            There are moments that define careers. And then there are moments
            that define people. <br />
            Renner faced one of those moments—one that could’ve easily rewritten
            everything.
          </span>

          <div>
            But instead of disappearing, he showed something rare:
            <ul>
              <li>Visibility in vulnerability. </li>
              <li>Strength without spectacle. </li>
              <li>Progress without pressure. </li>
              <li>He didn’t turn it into a performance. </li>
              <li>
                He just lived through it—and let people witness the process.
              </li>
              <li>
                That kind of transparency builds a different kind of connection.
              </li>
              <li>Not admiration from a distance.</li>
              <li>Respect up close.</li>
            </ul>
          </div>
        </div>

        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
