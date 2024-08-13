import React from "react";

interface DashboardCardProps {
  title: string;
  number: number;
  icon: React.ReactNode; // TODO: improve this
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  number,
  icon,
}) => {
  return (
    <div className="w-ful p-8 shadow rounded">
      <p>{title}</p>
      <div className="flex justify-between items-center pt-4">
        <h2 className="text-4xl">{number}</h2>
        {icon}
      </div>
    </div>
  );
};

export default DashboardCard;
