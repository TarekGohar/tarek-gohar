import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden">
      <div className="w-full pt-0 flex flex-col items-center justify-center">
        {/* Logo */}
        <span
          className="text-[4rem] text-cyan-900"
          style={{ fontFamily: "Zilap" }}>
          E
        </span>

        {/* Footer Menu */}
        <ul className="container mt-20 md:px-20 text-cyan-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 text-main font-normal text-xs sm:text-sm md:text-base tracking-wider">
          {/* Contact */}
          <li className="px-12 flex justify-start md:justify-center md:px-0  w-full">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-semibold uppercase">Contact</h3>

              {/* <div className="flex flex-col gap-y-1">
                <span>555 rue Chabanel Ouest</span>
                <span>Suite 1401</span>
                <span>Montreal, QC</span>
                <span>H2N 2H8</span>
              </div> */}
              <a href="tel:+1 (514) 844-8885">+1 (514) 497-9261</a>
              <a href="mailto:tarekgohar@outlook.com">tarekgohar@outlook.com</a>
            </div>
          </li>

          {/* Hours */}
          <li className="px-12 flex justify-start md:justify-center md:px-0 w-full">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-semibold uppercase">Hours</h3>
              <div className="flex flex-col gap-y-1">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </li>

          {/* About */}
          <li className="w-fit md:px-0 md:w-full text-center px-12 font-semibold uppercase">
            <Link href="/about">About</Link>
          </li>

          {/* Where to Buy */}
          <li className="w-fit md:px-0 md:w-full text-center px-12 font-semibold uppercase">
            <Link href="/apps">Applications</Link>
          </li>

          {/* Where to Buy */}
          <li className="w-fit md:px-0 md:w-full text-center px-12 font-semibold uppercase">
            <Link href="/websites">Web Sites</Link>
          </li>
        </ul>
      </div>
      {/* Copyright */}
      <p className="mt-12 text-gray-500 text-center py-2 text-[8px] font-extralight">
        © {year} Vereon. All Rights Reserved.
      </p>
    </footer>
  );
}
