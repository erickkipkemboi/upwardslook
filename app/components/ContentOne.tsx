import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Contentone = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 bg-white py-12 px-6 lg:px-20">
  
      <div className="flex-1">
        <Image
        src="/1.jpg"
        alt="Team Discussion"
        className="rounded-lg shadow-md w-full object-cover"
        width={800}
        height={500}
      />
      </div>

       <div className="flex-1  pt-0">
        <Card className="shadow-lg">
          <CardHeader>
            <h2 className="text-2xl text-center font-bold text-gray-800">Who We Are</h2>
          </CardHeader>
          <CardContent>
          <p className="text-base text-gray-700 mb-4">
            At Upwards Company, we are committed to providing high-quality roofing solutions using traditional and sustainable reed materials. Our expertise ensures durable, eco-friendly, and aesthetically pleasing roofs for residential and commercial projects.
          </p>
          <p className="text-base text-gray-700">
            Whether you are building a new home, renovating an existing structure, or looking for innovative roofing designs, our skilled team is here to deliver craftsmanship and reliability you can trust.
          </p>

          </CardContent>
          <CardFooter className="pt-4">
            <a
              href="/Contact"
              className=" items-center bg-yellow-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200"
            >
              Contact Us Now! →
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Contentone;
