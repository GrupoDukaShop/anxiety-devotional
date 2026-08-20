export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fbrand">When Anxiety Takes Over</div>
        <p className="disclaimer">
          This devotional is a faith-based spiritual resource created to
          encourage prayer, Scripture reflection, and trust in God. It is not
          a substitute for professional mental health care, therapy, or
          medical treatment. If you are experiencing persistent, severe, or
          overwhelming anxiety, please also reach out to a licensed
          counselor, therapist, or medical provider.
        </p>
        <p className="crisis">
          If you are in crisis or having thoughts of harming yourself, please
          contact the 988 Suicide &amp; Crisis Lifeline (call or text 988 in
          the United States) or your local emergency services immediately.
        </p>
        <div className="fbottom">
          <span>
            © {new Date().getFullYear()} When Anxiety Takes Over. All rights
            reserved.
          </span>
          <span>Contact · Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
