import React from "react";
import Image from "next/image";
import Background2 from "../public/Background2.svg";
import Rectangle from "../public/Rectangle.svg";

const Product = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center mb-6 md:mb-0 font-gill sans">
        <div className="">
        <Image className="w-full filter   " src={Background2} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center backdrop-blur-sm bg-black/30 ">
          <h1 className="text-blue-500 font-sm font-bold mt-6 text-medium font-sans pb-2 pl-4 sm:text-lg lg:text-xl">
            OUR PRODUCTS
          </h1>
          <h1 class="text-5xl m-2 text-center text-white font-gill sans sm:text-3xl lg:text-6xl md:text-5xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-start mt-12  bg-[#C0C6FB] mr-80 ml-10">
        <h4 className="font-bold font-gill sans px-4 mb-1 ml-20">
          ALL THE PRODUCTS :
        </h4>
        <button className="border-2 border-[#444BC8] rounded-lg text-sm font-bold px-3 py-2 ml-4 mr-2 font-gill sans text-white bg-[#5559DB]">
          PDCloudEX SDN
        </button>
        <button className="border-2 border-[#444BC8] rounded-lg text-sm font-bold px-3 py-2 ml-4 mr-2 font-gill sans text-[#6169E4]">
          IVentura
        </button>
        <button className="border-2 border-[#444BC8] rounded-lg text-sm font-bold px-3 py-2 ml-4 mr-2 font-gill sans text-[#6169E4]">
          SSO
        </button>
        <button className="border-2 border-[#444BC8] rounded-lg text-sm font-bold px-3 py-2 ml-4 mr-2 font-gill sans text-[#6169E4]">
          DevOps Assessment Tools
        </button>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ">
          <h1 className="text-black font-bold text-3xl md:text-4xl ml-4 md:ml-20">
            PDCloudEX SDN{" "}
          </h1>
        </div>
        <br />
        <div className="flex flex-col md:flex-row">
          <div className="text-xl text-justify ml-4 md:ml-20 p-2 md:w-3/4 font-gill sans">
            PDCloudEx SDN is a software-defined networking solution which
            provides an intra-datacenter connectivity for virtual and physical
            workloads on the cloud. Built on OpenDayLight, OpenVSwitch, and
            Openstack, the product provides a disaggregation for both software
            and hardware components in a network while providing full control
            over the virtual networks.
            <br />
            <br />
            Our technology enables full network virtualization and allows
            enterprises, data centers, and service providers to easily deploy,
            control, monitor, and manage secure multi-tenant network
            infrastructure. In other words, it is a comprehensive solution that
            makes the network as readily consumable as compute resources across
            the datacenter, enterprise WAN, and public cloud providers.
          </div>

          <Image
            className="w-full md:w-auto ml-4 md:mr-10 mt-4 md:mt-0"
            src={Rectangle}
          />
        </div>

        <div>
          <h3 className="text-xl"></h3>

          <div className="mb-96 pb-10">
            <button className="mt-10 mb-40 mr-4 ml-14 md:mr-20 mx-auto border-2 border-[#6169E4] px-10 py-3 rounded-lg text-xl hover:bg-[#6169E4] hover:text-white inline-block font-sans">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Product;
