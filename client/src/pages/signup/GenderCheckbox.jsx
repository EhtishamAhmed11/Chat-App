import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-2 ">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}></label>
        <span className="label-text text-white">Male</span>
        <input
          type="checkbox"
          className="checkbox border-slate-900"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
        />
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}></label>
        <span className="label-text text-white">Female</span>
        <input
          type="checkbox"
          className="checkbox border-slate-900"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
      </div>
    </div>
  );
};

export default GenderCheckbox;
