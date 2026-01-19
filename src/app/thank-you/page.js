import Link from "next/link";
export const metadata={
    title: "Thank You",
    description: "Thank you for your submission"
}

const ThankYouPage = () => {
 
  return (
    <div>
      {" "}
    
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            Thank You!
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Your submission has been received.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            We will get back to you as soon as possible.
          </p>
          <div className="bg-blue_c hover:bg-blue_c text-white font-bold py-2 px-4 rounded">
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
