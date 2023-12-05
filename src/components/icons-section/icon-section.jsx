// IconsSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillWave,
  faChartLine,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';

const IconsSection = () => {
  return (
    <section id="about" className="p-7 bg-white text-grey">
      <div className="flex text-center justify-center h-full">
        <div className="p-5">
          <FontAwesomeIcon
            icon={faMoneyBillWave}
            size="2x"
            className="text-white bg-secondary p-4 rounded-full mb-3"
          />
          <div>
            <h3>Investment Banking</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              obcaecati.
            </p>
          </div>
        </div>

        <div className="p-5">
          <FontAwesomeIcon
            icon={faChartLine}
            size="2x"
            className="text-white bg-secondary p-4 rounded-full mb-3"
          />
          <div>
            <h3>Portfolio Manager</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              obcaecati.
            </p>
          </div>
        </div>

        <div className="p-5">
          <FontAwesomeIcon
            icon={faFileInvoice}
            size="2x"
            className="text-white bg-secondary p-4 rounded-full mb-3"
          />
          <div>
            <h3>Tax & Custodial</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              obcaecati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconsSection;
