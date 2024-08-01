import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex gap-2 ">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}></label>
        <span className="label-text text-white">Male</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}></label>
        <span className="label-text text-white">Female</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </div>
    </div>
  );
};

export default GenderCheckbox;
