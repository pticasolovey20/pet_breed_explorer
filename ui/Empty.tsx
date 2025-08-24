interface EmptyBreedProps {
  content: string;
}

const Empty = ({ content }: EmptyBreedProps) => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <p className="text-lg font-medium text-muted-foreground">{content}</p>
    </div>
  );
};

export default Empty;
