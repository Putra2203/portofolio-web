import React from "react";

const SuccessMatrix = ({ matrix }) => {
  return (
    <div className="mt-6 mb-4">
      <h3 className="text-lg font-bold text-red-400 mb-3">
        Frontend Skills Demonstrated
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matrix.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-200">{item.skill}</span>
              <span className="text-sm text-gray-400">{item.level}/5</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-red-500 h-2.5 rounded-full"
                style={{ width: `${item.level * 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessMatrix;
