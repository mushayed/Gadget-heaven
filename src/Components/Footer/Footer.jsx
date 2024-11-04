const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-3 p-4">
        <h3 className="text-3xl font-bold text-center">Gadget Heaven</h3>
        <p className="text-center">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr />
      <footer className="footer p-10">
        <nav>
          <h6 className="footer-title text-lg font-bold">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-bold">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-bold">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
