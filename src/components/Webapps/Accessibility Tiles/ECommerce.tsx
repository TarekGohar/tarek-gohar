import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ECommerce() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="min-w-40 min-h-40 bg-neutral-50/50 rounded-xl py-[6rem] flex flex-col items-center justify-center">
      <div
        className="w-[90%] max-w-[30rem] min-w-[15rem] mx-auto max-h-[16rem] bg-neutral-50 rounded-2xl border-neutral-300 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0))",
        }}>
        <div className="h-8 text-xs items-center px-2 flex justify-between font-semibold text-neutral-500 bg-neutral-200/80">
          <div className="w-full h-full flex items-center space-x-[.3rem]">
            <span className="w-[.7rem] h-[.7rem] rounded-full bg-red-500 inline-block" />
            <span className="w-[.7rem] h-[.7rem] rounded-full bg-yellow-500 inline-block" />
            <span className="w-[.7rem] h-[.7rem] rounded-full bg-green-500 inline-block" />
          </div>
        </div>
        <div className="h-72 bg-neutral-100 p-2 flex flex-col items-center justify-start space-y-1">
          {/* Shopping Cart */}
          <div className="w-full flex items-center justify-end">
            <div className="relative w-[1.2rem] h-[1.2rem]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full">
                <path
                  d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
                  stroke="#b3b3b3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Notification dot outside the SVG */}
              <span className="absolute top-0 -right-1 w-2 h-2 bg-red-500 rounded-full text-[.25rem] font-bold text-white flex items-center justify-center">
                2
              </span>
            </div>
          </div>
          {/* Checkout Page */}
          <div className="w-full min-h-[10rem] flex justify-between items-center py-4">
            {/* Product Image */}
            <div className="w-full h-full flex flex-col items-center justify-start space-y-1">
              <div className="w-[7rem] h-[8rem] bg-neutral-100 border-4" />
              <div className="max-w-[7rem] h-fit space-x-2">
                <span className="w-[1rem] h-[1rem] inline-block bg-neutral-200" />
                <span className="w-[1rem] h-[1rem] inline-block bg-neutral-200" />
                <span className="w-[1rem] h-[1rem] inline-block bg-neutral-200" />
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="w-full h-full flex flex-col items-center justify-start space-y-1">
              <div className="w-[9rem] flex flex-col items-start justify-start space-y-[.5rem]">
                <div className="w-[7rem] h-[.6rem] bg-neutral-200" />
                <div className="w-[6rem] h-[.5rem] bg-neutral-200/70" />
                <div className="w-[4rem] h-[.5rem] bg-neutral-200/70" />

                <div className="w-[4rem] h-[.5rem] bg-neutral-200/70" />
                <div className="flex items-center space-x-2 w-full">
                  <div className="w-[4rem] h-[.5rem] bg-neutral-200" />
                  <div className="w-[2rem] h-[.5rem] bg-green-600" />
                </div>
                <p className="text-[.3rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  necessitatibus natus maiores pariatur. Aspernatur dolores,
                  possimus ratione quasi voluptatibus omnis.
                </p>
                <p className="text-[.3rem]">
                  Ratione, voluptatibus animi eligendi nisi molestiae distinctio
                  optio sequi aliquam nostrum quasi! Praesentium quod sed odit
                  sequi, nesciunt vitae velit rem est.
                </p>
                <p className="text-[.3rem]">
                  Tempore dicta, quos necessitatibus nesciunt nemo voluptates
                  enim eveniet, repellendus quidem est tempora doloribus. Non
                  illo explicabo dolorum cumque quos quis animi nisi incidunt
                  perferendis. Doloremque numquam blanditiis totam architecto
                  aliquam nam non illo sapiente eius cum, fugiat ipsam itaque
                  dolore mollitia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-cyan-800 text-center font-medium uppercase tracking-wider">
          E-Commerce
        </h3>
        <p className="max-w-[18rem] text-center text-sm">
          Provide seamless shopping experiences, faster checkout processes, and
          full customization.
        </p>
      </div>
    </motion.div>
  );
}
