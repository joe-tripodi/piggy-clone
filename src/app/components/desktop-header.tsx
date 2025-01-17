'use client';

import { useState } from "react";

export default function DesktopHeader() {
  // State to keep track of the active dropdown
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Function to handle the dropdown toggle
  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  window.addEventListener('scroll', function() {
    const div = document.querySelector('#header');
    if (div != null) {
      if (window.scrollY > 0) {
        div.classList.add('bottom-shadow');
      } else {
        div.classList.remove('bottom-shadow');
      }
    }
  });

  return (
    <div className="bg-white sticky top-0 pb-2 transition-all ease-in-out duration-300" id="header">
      <div className="h-5 w-full"></div>
      <header className="flex w-full align-middle whitespace-normal justify-between overflow-hidden mx-auto container">
        <div>
          <svg className="fill-[#fc5200] hover:fill-[#d44500] cursor-pointer" width="90" height="27" viewBox="0 0 90 27" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.9883 8.99986C20.9883 13.7293 17.1336 17.594 12.3773 17.594C10.5737 17.594 8.92932 16.9763 7.51478 15.8116V26.1528H3.74857V9.74104C3.74857 9.54692 3.71321 8.71751 3.60712 7.72927C3.41262 5.84104 2.08649 4.2528 0.15918 3.58222L1.3969 0.0351562C3.28885 0.688097 4.82716 1.94104 5.88806 3.45869C7.46173 1.64104 9.79572 0.405745 12.3949 0.405745C17.1336 0.405745 20.9883 4.2528 20.9883 8.99986ZM48.5364 17.7352V8.94692C48.5187 4.23516 44.6641 0.405744 39.9077 0.388097C35.1513 0.388097 31.2967 4.23516 31.2967 8.98222C31.2967 13.7293 35.169 17.5763 39.9077 17.5763C41.7113 17.5763 43.5679 16.8352 44.7525 15.7587V17.7352C44.7525 20.7528 42.4893 23.2234 39.7132 23.2234C37.8213 23.2234 36.0885 22.0763 35.2221 20.2234L31.8095 21.8293C33.3125 25.0057 36.336 26.9822 39.7132 26.9822C44.5757 26.9822 48.5364 22.8352 48.5364 17.7352ZM69.2063 17.7528V9.08812C69.2063 9.05282 69.2063 9.01753 69.1887 8.99988C69.1887 4.25282 65.3164 0.405764 60.5776 0.405764C55.8213 0.405764 51.9666 4.25282 51.9666 8.99988C51.9666 13.7469 55.8389 17.594 60.5776 17.594C62.3812 17.594 64.3792 16.7822 65.4224 15.7764V17.7528C65.4224 20.7705 63.1592 23.2411 60.3831 23.2411C58.4912 23.2411 56.7584 22.094 55.892 20.2411L52.4794 21.8469C53.9824 25.0234 57.0059 26.9999 60.3831 26.9999C65.2456 26.9999 69.2063 22.8528 69.2063 17.7528ZM24.277 16.9763H28.0432V1.18222H24.277V16.9763ZM65.4401 8.99994C65.4401 6.33524 63.2653 4.16465 60.5953 4.16465C57.9254 4.16465 55.7505 6.33524 55.7505 8.99994C55.7505 11.6647 57.9254 13.8352 60.5953 13.8352C63.283 13.8176 65.4401 11.647 65.4401 8.99994ZM44.7702 8.99994C44.7702 6.33524 42.5953 4.16465 39.9254 4.16465C37.2554 4.16465 35.0806 6.33524 35.0806 8.99994C35.0806 11.6647 37.2554 13.8352 39.9254 13.8352C42.5953 13.8176 44.7702 11.647 44.7702 8.99994ZM86.1277 8.99986V1.53516H89.9116V17.7528C89.9116 22.8528 85.9509 26.9999 81.0884 26.9999C77.7112 26.9999 74.6877 25.0234 73.1847 21.8469L76.5973 20.241C77.4637 22.094 79.1788 23.241 81.0884 23.241C83.8645 23.241 86.1277 20.7881 86.1277 17.7528V15.7763C85.0315 16.7999 83.0688 17.594 81.283 17.594C76.5266 17.594 72.672 13.7293 72.672 8.99986V1.53516H76.4382V8.99986C76.4382 11.6646 78.613 13.8352 81.283 13.8352C83.9529 13.8352 86.1277 11.6646 86.1277 8.99986ZM12.3772 4.16465C15.0472 4.16465 17.222 6.33524 17.222 8.99994C17.222 11.647 15.0472 13.8176 12.3772 13.8352C9.7073 13.8352 7.53245 11.6647 7.53245 8.99994C7.53245 6.33524 9.7073 4.16465 12.3772 4.16465Z">
            </path>
          </svg>
        </div>
        <div>
          <div className="flex align-middle">
            {["Solution", "Platform", "Resources", "Pricing", "Company"].map((item) => {
              return (
                <div
                  className="flex items-center align-middle py-1 px-4 rounded-full cursor-pointer hover:bg-[#f6f7fe]"
                  onClick={() => handleDropdownClick(item)}
                  key={item}
                >
                  <label className={`${activeDropdown === item ? 'text-primary-500' : 'text-gray-500'} select-none cursor-pointer`}>{item}</label>
                  <div className={`w-2.5 h-2.5 ml-2 transition-all ease-out-in duration-200 ${activeDropdown === item ? 'rotate-180 bg-primary-500' : 'bg-gray-500'} cursor-pointer`} style={{ mask: "url('/static/icons/dropdown-icon.svg') center center no-repeat" }}></div>
                </div>
              )
            })
            }
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-x-3">
          <button className="bg-secondary text-primary rounded-xl py-2 px-3">Book a demo</button>
          <button className="bg-primary text-white rounded-xl py-2 px-3">Try for free</button>
        </div>
      </header >
    </div>
  )
}
