"use client";

const Contact = () => {

  return (
    <div>
      <ul className="social-links">
        <li className="facebook">
          <a href="https://www.facebook.com/hngngn.10">Facebook</a>
        </li>
        <li className="twitter">
          <a href="https://twitter.com/marcus_killian1">Twitter</a>
        </li>
        <li className="youtube">
          <a href="https://www.youtube.com/@hgtn3581">YouTube</a>
        </li>
        <li className="gmail">
          {/* mailto: <a href="https://accounts.google.com/ServiceLogin?hl=vi">ng.hoangtu.main@gmail.com</a> */}
          mailto: <a href="https://mail.google.com/mail/#inbox?compose=new&view=cm&fs=1&to=ng.hoangtu.main@gmail.com">ng.hoangtu.main@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;