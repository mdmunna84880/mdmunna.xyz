import { ReactNode } from "react";
import { Container } from '../ui/Container';
import { cn } from "../../utils/cn";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: string;
}

/**
 * Wrapper for page sections to ensure consistent vertical spacing.
 */
export const Section = ({ id, children, className, background = "bg-white" }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 sm:py-32", background, className)}>
      <Container>
        {children}
      </Container>
    </section>
  );
};
