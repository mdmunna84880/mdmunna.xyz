import { cn } from "../../utils/cn";

interface HeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

/**
 * Standard section heading component to ensure consistent typography.
 */
export const Heading = ({ title, subtitle, centered = true }: HeadingProps) => {
  return (
    <div className={cn("mb-16", centered && "text-center")}>
      <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};
