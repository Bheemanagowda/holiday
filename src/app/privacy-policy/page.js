export const metadata = {   
    title: 'Privacy Policy – VisionFly Holidays',
    description: 'Learn about VisionFly Holidays Pvt Ltd’s commitment to protecting your privacy and personal data when you book holiday packages or use our services.',
}
export default function PrivacyPolicy() {

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 pt-20 lg:pt-30 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">
          Privacy Policy – VisionFly Holidays
        </h1>

        {/* Privacy Policy Content */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            At VisionFly Holidays Pvt Ltd, we are committed to protecting the
            privacy and security of our customers' personal information. When
            you book a holiday package or use our website, we collect personal
            data that you provide to us, such as your name and contact details,
            travel preferences, payment details, and passport and visa details.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            This personal data is used to process your holiday booking, provide
            you with travel-related services, communicate with you about your
            booking and travel arrangements, and improve our website and
            services.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We take the security of your personal data seriously and use secure
            servers and databases to store your information. Encryption is used
            to protect payment details, and additional safeguards such as
            firewalls, antivirus software, and access controls ensure your data
            remains protected from cyber threats and unauthorized access.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We may share your personal data with our travel partners and
            suppliers, payment processors, banks, and government authorities
            when necessary to provide you with travel-related services.
          </p>

          <h2 className="text-2xl font-normal mt-6 mb-3">Your Rights</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>The right to access and correct your personal data</li>
            <li>The right to object to the processing of your data</li>
            <li>The right to request deletion of your data</li>
            <li>The right to withdraw consent at any time</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            If you have any questions or concerns about our Privacy Policy,
            please contact us.
          </p>
        </section>

        {/* Terms & Conditions */}
        <h1 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            When you book a holiday package with VisionFly Holidays Pvt Ltd, you
            acknowledge that you have read, understood, and accepted our Terms &
            Conditions. A booking is confirmed when we receive a deposit or full
            payment from you.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Payment is due in full at the time of booking unless otherwise
            agreed. If you cancel your booking, you will be charged a
            cancellation fee which will be deducted from any refund.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            You must have a valid passport with at least six months' validity
            from the date of return, and you are responsible for obtaining any
            required visas. We strongly recommend purchasing travel insurance to
            cover events such as cancellations, medical emergencies, and delays.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            VisionFly Holidays Pvt Ltd is not liable for damages or losses
            caused by unforeseen circumstances such as natural disasters,
            terrorism, or travel disruptions. You are responsible for damages or
            losses resulting from your actions during travel.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms & Conditions are governed by the laws of
            [Country/State]. Any disputes shall be resolved through arbitration
            in accordance with the rules of the [Arbitration Association].
          </p>
        </section>

        {/* Contact Section */}
        <h2 className="text-2xl font-normal mb-3">Contact Us</h2>
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions or concerns about our Privacy Policy or
            Terms & Conditions, please contact us at:
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>VisionFly Holidays Pvt Ltd</strong>
            <br />
            <p className="w-11/12 lg:w-6/12 mx-auto lg:mx-0">
              {" "}
              Address: 15/22, 1st main ashtalakshmi Layout, puttenahalli main
              road, JP nagar 6th phase bangalore -560078
            </p>
            M : +91 9845248323 / +91 9036100528
            <p>Email : sales@visionflyholidays.com</p>
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            We reserve the right to modify or update our Privacy Policy and
            Terms & Conditions at any time.
          </p>
        </section>

        {/* Last Updated */}
        <p className="text-gray-600 text-sm italic">Last Updated: 10/12/2025</p>
      </div>
    </div>
  );
}
