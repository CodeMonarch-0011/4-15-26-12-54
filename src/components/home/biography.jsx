import "../../styles/home.css";
import image from "/images/Jeremy-r-1.webp";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">🔥 The Slow Burn Rise</span>

      <div className="biography-txt">
        <div>
          <span>
            In an industry obsessed with overnight success, Jeremy Renner built
            his career like a long-distance runner.
          </span>
          <span>
            No shortcuts. No manufactured hype. No sudden explosion into fame.
            <br />
            Just work.
          </span>

          <span>
            Before audiences ever saw him leading major films, he was stacking
            experience—taking on roles that demanded something real. Not
            glamorous. Not always widely seen. But necessary.
          </span>

          <span>
            And when that discipline finally met opportunity in The Hurt Locker,
            it didn’t feel like a breakout—it felt like a reveal.
          </span>
          <span>Suddenly, people weren’t asking, “Who is that?”</span>
          <span>
            They were asking, “How have we not been watching him this whole
            time?”
          </span>
          <span>
            Because that performance didn’t feel like a leap—it felt like the
            result of years of quiet preparation finally surfacing all at once.
          </span>
        </div>

        <div className="biography-txt-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
