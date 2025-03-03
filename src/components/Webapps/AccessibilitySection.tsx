import React from "react";

export default function AccessibilitySection() {
  return (
    <section className="h-fit">
      <div className="py-[10rem] md:my-[8rem] relative max-w-[120rem] mx-auto w-full flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-cyan-800/80 px-4 md:px-8">
          Solutions
        </h1>

        <div className="w-full flex flex-col items-center justify-center space-y-[2.5rem]">
          <div className="flex flex-col items-center justify-center space-y-[.5rem]">
            <h2 className=" text-cyan-800 text-center font-medium text-4xl md:text-5xl uppercase tracking-wider">
              Our Web App <span className="text-cyan-800/60">Solutions</span>
            </h2>
            <p className="md:max-w-[35rem] text-cyan-800/60 text-center font- md:text-xl">
              A handfull of the many solutions we have to fix your problems.
            </p>
          </div>
          {/* Solutions Grid */}

          <div className="max-w-[100rem] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-x-[5rem] lg:gap-4 text-cyan-800/80">
            {/* Order Management */}
            <div className="min-w-40 min-h-40 bg-neutral-50/70 py-[6rem] flex flex-col items-center justify-center">
              <div
                className="w-[90%] max-w-[30rem] min-w-[15rem] mx-auto max-h-[16rem] overflow-y-auto bg-neutral-50 rounded-2xl border-2 border-neutral-300 overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
                  maskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
                }}
              >
                <div className="h-10 text-xs items-center grid grid-cols-4 font-semibold text-neutral-500 bg-neutral-200/60">
                  <span className="pl-2">Order ID</span>
                  <span className="pl-2">First Name</span>
                  <span className="pl-2">Last Name</span>
                  <span className="pl-2">Date</span>
                </div>
                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
                  <span className="pl-2">#B2045</span>
                  <span className="pl-2">William</span>
                  <span className="pl-2">Jones</span>
                  <span className="pl-2">Feb 28, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
                  <span className="pl-2">#B2045</span>
                  <span className="pl-2">Liam</span>
                  <span className="pl-2">Smith</span>
                  <span className="pl-2">Feb 28, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-100/60">
                  <span className="pl-2">#C3089</span>
                  <span className="pl-2">Sophia</span>
                  <span className="pl-2">Garcia</span>
                  <span className="pl-2">Feb 27, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
                  <span className="pl-2">#D4011</span>
                  <span className="pl-2">Ethan</span>
                  <span className="pl-2">Williams</span>
                  <span className="pl-2">Feb 26, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-100/60">
                  <span className="pl-2">#C3089</span>
                  <span className="pl-2">Sophia</span>
                  <span className="pl-2">Garcia</span>
                  <span className="pl-2">Feb 27, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
                  <span className="pl-2">#D4011</span>
                  <span className="pl-2">Tarek</span>
                  <span className="pl-2">Gohar</span>
                  <span className="pl-2">Nov 15, 2001</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-cyan-800 text-center font-medium uppercase tracking-wider">
                  Order Management
                </h3>
                <p className="max-w-[18rem] text-center text-sm">
                  Track orders, manage inventory, and automate workflows,
                  ensuring faster processing and fewer errors.
                </p>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="min-w-40 min-h-40 bg-neutral-50/70 py-[6rem] flex flex-col items-center justify-center">
              <div
                className="w-[90%] max-w-[30rem] min-w-[15rem] mx-auto max-h-[16rem] bg-neutral-50 rounded-2xl border-neutral-300 overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0))",
                  maskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0))",
                }}
              >
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
                        className="w-full h-full"
                      >
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Omnis necessitatibus natus maiores pariatur.
                          Aspernatur dolores, possimus ratione quasi
                          voluptatibus omnis.
                        </p>
                        <p className="text-[.3rem]">
                          Ratione, voluptatibus animi eligendi nisi molestiae
                          distinctio optio sequi aliquam nostrum quasi!
                          Praesentium quod sed odit sequi, nesciunt vitae velit
                          rem est.
                        </p>
                        <p className="text-[.3rem]">
                          Tempore dicta, quos necessitatibus nesciunt nemo
                          voluptates enim eveniet, repellendus quidem est
                          tempora doloribus. Non illo explicabo dolorum cumque
                          quos quis animi nisi incidunt perferendis. Doloremque
                          numquam blanditiis totam architecto aliquam nam non
                          illo sapiente eius cum, fugiat ipsam itaque dolore
                          mollitia!
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
                  Provide seamless shopping experiences, faster checkout
                  processes, and full customization.
                </p>
              </div>
            </div>

            {/* Dashboards */}
            <div className="min-w-40 min-h-40 bg-neutral-50/70 py-[6rem] flex flex-col items-center justify-center">
              <div
                className="w-[90%] max-w-[30rem] min-w-[15rem] mx-auto max-h-[16rem] bg-neutral-50 overflow-hidden space-y-2"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
                  maskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
                }}
              >
                <div className="w-full flex space-x-2">
                  {/* Progress Circle */}
                  <div className="w-[12rem] h-[7rem] bg-neutral-100 rounded-xl flex items-center justify-center">
                    <div className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] relative flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="#F3F4F6"
                          strokeWidth="3"
                        />

                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="#b2b2b2"
                          strokeWidth="3.5"
                          strokeDasharray="50 50"
                          strokeDashoffset="0"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="#c4c4c4"
                          strokeWidth="3.5"
                          strokeDasharray="50 50"
                          strokeDashoffset="-40"
                        />

                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="#e4e4e4"
                          strokeWidth="3.5"
                          strokeDasharray="25 75"
                          strokeDashoffset="-50"
                        />

                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="#f4f4f4"
                          strokeWidth="3.5"
                          strokeDasharray="25 75"
                          strokeDashoffset="-75"
                        />
                      </svg>

                      <span className="absolute text-transparent bg-neutral-200 rounded-md font-bold text-xs  p-">
                        100%
                      </span>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="w-full h-[7rem] bg-blue-100/30 rounded-xl flex items-end justify-between px-[2rem] py-[1rem]">
                    <span className="inline-block w-[1.33rem] h-[4.0rem] bg-blue-300/60" />
                    <span className="inline-block w-[1.33rem] h-[2.7rem] bg-blue-300/90" />
                    <span className="inline-block w-[1.33rem] h-[3.9rem] bg-blue-300/60" />
                    <span className="inline-block w-[1.33rem] h-[2.3rem] bg-blue-300/70" />
                    <span className="inline-block w-[1.33rem] h-[4.2rem] bg-blue-300/60" />
                    <span className="inline-block w-[1.33rem] h-[2.5rem] bg-blue-300/30" />
                    <span className="inline-block w-[1.33rem] h-[2.2rem] bg-blue-300/60" />
                    <span className="inline-block w-[1.33rem] h-[2.7rem] bg-blue-300/70" />
                    <span className="inline-block w-[1.33rem] h-[3.6rem] bg-blue-300/50" />
                  </div>
                </div>

                {/* Logs */}
                <div className="w-full flex space-x-2">
                  <div className="w-[60rem] h-[7rem] bg-neutral-200 rounded-xl space-y-4 py-3">
                    <div className="w-[80%] mx-auto flex space-x-2">
                      <span className="inline-block w-[4rem] h-[.5rem] text-[.6rem] text-neutral-500 font-medium">
                        Logs
                      </span>
                    </div>
                    <div className="w-[80%] h-[80%] mx-auto my-auto flex flex-col items-center justify-start space-y-2 ">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-full flex space-x-2">
                          <span className="inline-block w-[.25rem] h-[.25rem] bg-neutral-400/40" />
                          <span className="inline-block w-full h-[.25rem] bg-neutral-400/40" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-[7rem] bg-green-200 rounded-xl p-4 flex flex-col items-center justify-start space-y-4">
                    <span className=" inline-block h-[1rem] w-[90%] text-[.6rem] font-medium text-green-600">
                      Orders
                    </span>
                    <span className=" inline-block h-[2rem] w-[90%] text-sm text-center font-bold text-green-600">
                      96,540
                    </span>
                    <span className=" inline-block h-[1rem] w-[90%] text-xs text-left text-green-600">
                      + 6.16%
                    </span>
                  </div>
                  <div className="w-full h-[7rem] bg-yellow-200 rounded-xl p-4 flex flex-col items-center justify-start space-y-4">
                    <span className=" inline-block h-[1rem] w-[90%] text-[.6rem] font-medium text-yellow-600">
                      Issues
                    </span>
                    <span className=" inline-block h-[2rem] w-[90%] text-sm text-center font-bold text-yellow-600">
                      503
                    </span>
                    <span className=" inline-block h-[1rem] w-[90%] text-xs text-left text-yellow-600">
                      + 6.16%
                    </span>
                  </div>
                </div>

                {/* Placeholder */}
                <div className="w-full flex space-x-2">
                  <div className="w-full h-[7rem] bg-blue-200 rounded-xl"></div>

                  <div className="w-[6rem] h-[7rem] bg-blue-200 rounded-xl"></div>
                  <div className="w-[6rem] h-[7rem] bg-blue-200 rounded-xl"></div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-cyan-800 text-center font-medium uppercase tracking-wider">
                  Dashboards
                </h3>
                <p className="max-w-[18rem] text-center text-sm">
                  Track key metrics, identify trends, and make informed
                  decisions — all in one centralized place.
                </p>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="min-w-40 min-h-40 bg-neutral-50/70 py-[6rem] flex flex-col items-center justify-center">
              <div
                className="w-[90%] max-w-[30rem] min-w-[15rem] mx-auto max-h-[16rem] bg-neutral-50 rounded-2xl border-neutral-300 overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0))",
                  maskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0))",
                }}
              >
                <div className="h-8 text-xs items-center px-2 flex justify-between bg-neutral-200/50">
                  {/* <div className="w-full h-full flex items-center space-x-[.3rem]">
                    <span className="w-[.7rem] h-[.7rem] rounded-full bg-red-500 inline-block" />
                    <span className="w-[.7rem] h-[.7rem] rounded-full bg-yellow-500 inline-block" />
                    <span className="w-[.7rem] h-[.7rem] rounded-full bg-green-500 inline-block" />
                  </div> */}
                </div>
                <div className="h-72 bg-neutral-100 p-6 flex flex-col items-center justify-start space-y-1">
                  {/* Checkout Page */}
                  <div className="w-[80%] min-w-[20rem] min-h-[10rem] flex flex-col justify-start items-center p-2 bg-neutral-200/60 rounded-xl">
                    <span className="text-[.5rem] font-semibold text-neutral-600 my-1">
                      November
                    </span>

                    <div className="w-full grid grid-cols-7 gap-1 gap-y-2">
                      {/* Days of the Week */}
                      {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                        (day) => (
                          <span
                            key={day}
                            className="text-[.5rem] font-semibold text-center text-neutral-400"
                          >
                            {day}
                          </span>
                        )
                      )}

                      {/* Empty spaces for correct date alignment */}
                      <span />
                      <span />
                      <span />
                      <span />

                      {/* Calendar Numbers */}
                      {Array.from({ length: 30 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-[.5rem] font-medium text-neutral-400 flex items-center justify-center h-6 ${
                            i === 14
                              ? "border-2 border-neutral-400/50 rounded-full"
                              : ""
                          }`}
                        >
                          {i + 1}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-cyan-800 text-center font-medium uppercase tracking-wider">
                  Booking Systems
                </h3>
                <p className="max-w-[18rem] text-center text-sm">
                  Schedule, reschedule, and manage appointments seamlessly while
                  integrating with your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
