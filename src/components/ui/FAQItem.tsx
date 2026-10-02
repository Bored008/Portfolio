import React from "react";

export interface FAQItemProps {
  question?: string;
  answer?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = () => {
  return null;
};

export default FAQItem;
