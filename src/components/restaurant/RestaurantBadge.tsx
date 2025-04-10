import React from "react";

interface RestaurantBadgeProps {
  icon: React.ElementType;
  iconSize?: number;
  title: string;
  subtitle: string;
}

const RestaurantBadge: React.FC<RestaurantBadgeProps> = ({ icon: Icon, iconSize = 25, title, subtitle }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-200 opacity-90 px-5 py-2 rounded-2xl">
      <Icon size={iconSize} />
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold">{title}</span>
        <span className="text-sm text-gray-500 -mt-2">{subtitle}</span>
      </div>
    </div>
  );
};

export default RestaurantBadge;