import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ICustomCard {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;

  cardProps?: React.HTMLAttributes<HTMLDivElement>;
  cardHeaderProps?: React.HTMLAttributes<HTMLDivElement>;
  cardTitleProps?: React.HTMLAttributes<HTMLDivElement>;
  cardDescriptionProps?: React.HTMLAttributes<HTMLDivElement>;
  cardContentProps?: React.HTMLAttributes<HTMLDivElement>;
  cardFooterProps?: React.HTMLAttributes<HTMLDivElement>;
}
const CustomCard = ({
  title,
  description,
  content,
  footer,
  cardProps,
  cardHeaderProps,
  cardTitleProps,
  cardDescriptionProps,
  cardContentProps,
  cardFooterProps,
}: ICustomCard) => {
  return (
    <Card className="w-1/2" {...cardProps}>
      <CardHeader {...cardHeaderProps}>
        <CardTitle {...cardTitleProps}>{title}</CardTitle>
        <CardDescription {...cardDescriptionProps}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent {...cardContentProps}>{content}</CardContent>
      <CardFooter className="flex justify-between" {...cardFooterProps}>
        {footer}
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
