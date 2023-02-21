import React from 'react';

const Modal = ({ isOpen, toggle }: { isOpen: boolean; toggle: any }) => {
  return (
    <div
      x-data={` isOpen: ${isOpen} `}
      className="relative flex justify-center"
    >
      <div
        x-show="isOpen"
        x-transition:enter="transition duration-300 ease-out"
        x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
        x-transition:leave="transition duration-150 ease-in"
        x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
        x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        className="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-color-tertiary sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
            <button
              className="text-white w-full flex justify-end items-center m-1"
              onClick={toggle}
            >
              <span className="block w-6 h-6 font-bold text-white cursor-pointer text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  enable-background="new 0 0 40 40"
                >
                  <line
                    x1="15"
                    y1="15"
                    x2="25"
                    y2="25"
                    stroke="#fff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  ></line>
                  <line
                    x1="25"
                    y1="15"
                    x2="15"
                    y2="25"
                    stroke="#fff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  ></line>
                  <circle
                    className="circle"
                    cx="20"
                    cy="20"
                    r="19"
                    opacity="0"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    fill="none"
                  ></circle>
                  <path
                    d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z"
                    className="progress"
                    stroke="#fff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    fill="none"
                  ></path>
                </svg>
              </span>
            </button>
            <div>
              <img
                className="object-cover w-full h-48 rounded-md"
                src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                alt=""
              />

              <div className="mt-4 text-center">
                <h3
                  className="font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Thank you for contacting use
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur dolorum aliquam ea, ratione deleniti porro officia?
                  Explicabo maiores suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
