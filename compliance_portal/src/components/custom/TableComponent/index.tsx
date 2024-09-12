import hooks from "@/hooks";
import React from "react";

const TableComponent = ({ columns, dataList }) => {
  return (
    <table className="w-full">
      <thead className="border">
        <tr>
          {columns?.map((column) => (
            <th className="py-2">{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList?.map((data, index) => {
          return (
            <tr className="border">
              {columns?.map((column) => (
                <td className="text-center py-2">
                  {column.render ? column.render(data) : data[column.field]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
