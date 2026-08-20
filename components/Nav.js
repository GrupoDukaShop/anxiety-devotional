import { SunriseIcon } from "./Icons";

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="brand">
          <SunriseIcon />
          When Anxiety Takes Over
        </div>
        <a href="#pricing" className="btn btn-primary">
          Get the Devotional
        </a>
      </div>
    </nav>
  );
}
