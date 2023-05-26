import masthead from "../masthead.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mt-8 ">
      {/* <h1 className="text-3xl text-center text--[--comicGreen]">
        Welcome to Comics Stash
      </h1> */}

      <div className="container px-6 mx-auto">
        <section className="mb-16 text-gray-800 text-center lg:text-left">
          {/* <style>
    @media (min-width: 992px) {
      .rotate-lg-6 {
        transform: rotate(6deg);
      }
    }
  </style> */}

          <div className="md:px-6 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 flex items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div
                    className="relative block rounded-lg shadow-lg px-6 pt-12 pb-6 md:px-8 lg:-mr-14"
                    style={{
                      background: "hsla(0, 0%, 100%, 0.55)",
                      backdropFilter: "blur(30px)",
                      zIndex: "1",
                    }}
                  >
                    <h1 className="text-3xl font-bold mb-6">
                      Welcome To Comics Stash
                    </h1>
                    <p className="text-gray-500 mb-6">
                      This is a web app created to keep up with my comic book
                      collection.
                    </p>

                    <div className="text-sm grid md:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-x-2">
                      <div className="mb-6">
                        <Link to="/advanced-search">
                          <button className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Find An Issue
                          </button>
                        </Link>
                      </div>

                      <div className="mb-6">
                        <Link to="/all-issues">
                          <button className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View All Issues
                          </button>
                        </Link>
                      </div>

                      <div className="mb-6">
                        <Link to="/all-collections">
                          <button className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                            View Collections
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0 hidden md:block">
                  <img
                    src={masthead}
                    className="w-full rounded-lg rotate-lg-6"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
