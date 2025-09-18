const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Akash Chawla. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;