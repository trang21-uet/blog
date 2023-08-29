// "use client";
import Link from "next/link";
import "./ContactStyling.css";

const Contact = () => {

  return (
    <div>
      <ul className="social-links">
        <li className="facebook">
          <a><Link href="https://www.facebook.com/hngngn.10" target={"_blank"}>Facebook</Link></a>
        </li>
        <li className="twitter">
          <a><Link href="https://twitter.com/marcus_killian1">Twitter</Link></a>
        </li>
        <li className="youtube">
          <a><Link href="https://www.youtube.com/@hgtn3581">YouTube</Link></a>
        </li>
        <li className="gmail">
          mailto: <a><Link href="https://mail.google.com/mail/#inbox?compose=new&view=cm&fs=1&to=ng.hoangtu.main@gmail.com">ng.hoangtu.main@gmail.com</Link></a>
          {/* mailto: <a><Link href={"https://accounts.google.com/Service}Login?hl=vi">ng.hoangtu.main@gmail.com</Link></a> */}
        </li>
      </ul>
    </div>
  );
};

export default Contact;