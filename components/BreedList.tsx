const BreedList = () => {
  return (
    <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <li key={index} className="min-w-0 sm:aspect-square">
          <div className="w-full h-full border">
            <span>{index + 1}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BreedList;
