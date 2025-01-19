import { useRouter } from 'next/router';
import PropertyDetail from '../../property/PropertyDetail';
import { PROPERTYLISTINGSAMPLE } from '../../constants/index';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Property not found</p>
      </div>
    );
  }

  return <PropertyDetail property={property} />;
}