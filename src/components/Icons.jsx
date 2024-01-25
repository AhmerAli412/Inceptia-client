import React from "react";

const Icons = () => {
  return (
    <div className="relative isolate bg-bgg">
      <div className="relative isolate h-64 py-20">
        {/* <div
          className="absolute inset-x-0 top-3/2 -z-10 -translate-y-3/4 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#949c96] to-[#1ac583]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div> */}
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#949c96] to-[#1ac583] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <ul
          role="list"
          className="grid  grid-cols-1 bg-bgg gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-bgg1 text-center shadow">
            <div className="flex flex-1 flex-col p-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="lightgreen"
                className="w-36  h-36"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
              <h3 className="mt-6 text-sm font-medium text-white">
                Set Up your Wallet
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">
                  Initially set up your wallet to further access
                </dd>
                <dt className="sr-only">Role</dt>
              </dl>
            </div>
          </li>
          <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-bgg1 text-center shadow">
            <div className="flex flex-1 flex-col p-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="lightgreen"
                className="w-36 h-36"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
              <h3 className="mt-6 text-sm font-medium text-white">
                Make Your Collection
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">
                  Make your own collection of your own NFTs
                </dd>
                <dt className="sr-only">Role</dt>
              </dl>
            </div>
          </li>
          <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-bgg1 text-center shadow">
            <div className="flex flex-1 flex-col p-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="lightgreen"
                className="w-36 h-36"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <h3 className="mt-6 text-sm font-medium text-white">
                Add your NFTs
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">
                  Add and link your NFTs to your account
                </dd>
                <dt className="sr-only">Role</dt>
              </dl>
            </div>
          </li>
          <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-bgg1 text-center shadow">
            <div className="flex flex-1 flex-col items-center p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="lightgreen"
                className="w-36 h-36"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                />
              </svg>
              <h3 className="mt-6 text-sm font-medium text-white">
                List them for sale
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">List your NFT to sale</dd>
                <dt className="sr-only">Role</dt>
              </dl>
            </div>
          </li>
          {/* More people... */}
        </ul>
      </div>

      <div className="bg-bgg">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="bg-bgg h-full py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-lg px-4 md:px-8">
            <div class="mb-8 md:mb-12">
              <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
                Our Customers by the numbers
              </h2>

              <p class="mx-auto max-w-screen-md text-center text-white md:text-lg">
                Elevating Digital Realms: Where Active Users Craft many Unique
                NFTs, Fueling a Dynamic Marketplace of 1000+ Transactions
              </p>
            </div>

            <div class="grid grid-cols-2 gap-6 rounded-lg bg-bgg1 p-6 md:grid-cols-4 md:gap-8 md:p-8">
              <div class="flex flex-col items-center">
                <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  200
                </div>
                <div class="text-sm text-indigo-200 sm:text-base">
                  Active Users
                </div>
              </div>

              <div class="flex flex-col items-center">
                <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  500+
                </div>
                <div class="text-sm text-indigo-200 sm:text-base">
                  NFT Creations
                </div>
              </div>

              <div class="flex flex-col items-center">
                <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  Transactions
                </div>
                <div class="text-sm text-indigo-200 sm:text-base">1000</div>
              </div>

              <div class="flex flex-col items-center">
                <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  Exclusive+
                </div>
                <div class="text-sm text-indigo-200 sm:text-base">Boosters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
