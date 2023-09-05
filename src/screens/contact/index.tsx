// ;
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <ul className="social-links">
        <li className="facebook">
          <Link href="https://www.facebook.com/hngngn.10">Facebook</Link>
        </li>
        <li className="twitter">
          <Link href="https://twitter.com/marcus_killian1">Twitter</Link>
        </li>
        <li className="youtube">
          <Link href="https://www.youtube.com/@hgtn3581">YouTube</Link>
        </li>
        <li className="gmail">
          {/* mailto: <Link href={"https://accounts.google.com/Service}Login?hl=vi">ng.hoangtu.main@gmail.com</Link> */}
          mailto:{" "}
          <Link href="https://mail.google.com/mail/#inbox?compose=new&view=cm&fs=1&to=ng.hoangtu.main@gmail.com">
            ng.hoangtu.main@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
