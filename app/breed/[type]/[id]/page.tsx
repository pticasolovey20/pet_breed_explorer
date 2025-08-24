import BreedDetails from "@/components/BreedDetails";

interface BreedDetailPageProps {
  params: Promise<{
    type: "cat" | "dog";
    id: string;
  }>;
}

const BreedDetailPage = async ({ params }: BreedDetailPageProps) => {
  const { id, type } = await params;

  return <BreedDetails id={id} type={type} />;
};

export default BreedDetailPage;
