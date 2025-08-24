interface BreedDetailPageProps {
  params: Promise<{
    type: "cat" | "dog";
    id: string;
  }>;
}

const BreedDetailPage = async ({ params }: BreedDetailPageProps) => {
  const { type, id } = await params;

  console.log({ type, id });

  return <div>BreedDetailPage</div>;
};

export default BreedDetailPage;
