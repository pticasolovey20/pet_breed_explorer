import { classNames } from "@/utils/classNames";

interface BreedErrorNotificationProps {
  className?: string;
  content: string;
}

const BreedErrorNotification = ({
  className,
  content,
}: BreedErrorNotificationProps) => {
  return (
    <div
      className={classNames(
        "p-4 border-l-4 border-yellow-500 bg-yellow-100",
        className
      )}
    >
      <p className="text-yellow-700 font-medium">{content}</p>
    </div>
  );
};

export default BreedErrorNotification;
