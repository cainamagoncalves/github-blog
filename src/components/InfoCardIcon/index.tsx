import { ReactNode } from "react";
import { InfoCardIconContainer } from "./style";

interface InfoCardContainerProps {
  icon: ReactNode;
  description: string;
}

export function InfoCardIcon({ icon, description }: InfoCardContainerProps) {
  return (
    <InfoCardIconContainer>
      {icon}
      {description}
    </InfoCardIconContainer>
  )
}