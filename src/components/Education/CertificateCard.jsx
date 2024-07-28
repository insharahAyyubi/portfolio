import React from "react";

const CertificateCard = ({ data }) => {
  return (
    <div className="card card-compact p-0 rounded bg-base-100 dark:bg-transparent border border-slate-300 w-80 max-h-60 shadow-slate-400 shadow-md">
      <figure className="min-h-20">
        <img
        className="object-contain"
          src={data.img}
          alt="company_img"
        />
      </figure>
      <div className="card-body p-1 pb-2 items-center gap-0 bg-pink-100 dark:bg-[#02010412]">
        <h2 className="card-title dark:text-pink-300 text-lg font-medium">
          {data.title}
        </h2>
        <h3 className="text-base font-normal"> - {data.company}</h3>
      </div>
    </div>
  );
};

export default CertificateCard;
