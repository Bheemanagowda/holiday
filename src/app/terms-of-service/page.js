
export const metadata = {   
    title: 'Terms of Service – VisionFly Holidays',
    description: 'Read the Terms of Service for VisionFly Holidays, including booking, payment, cancellation policies, liabilities, and more.',
}
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 pt-20 lg:pt-30 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">
          Terms of Service – VisionFly Holidays
        </h1>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-normal mb-3">1. Booking</h2>
          <p className="text-gray-700 leading-relaxed">
            Your agreement is with VisionFly Holidays. A contract is established once we confirm your
            booking for tours, hotel stays, or other travel services and receive your deposit. All
            communications regarding bookings must be addressed to VisionFly Holidays.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-normal mb-3">2. Payments</h2>
          <p className="text-gray-700 leading-relaxed">
            To secure your booking, an advance payment of 40% of the total cost is required.
            Remaining balance must be paid before the tour begins. VisionFly Holidays reserves the
            right to determine the advance required based on service type and time left before commencement.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-normal mb-3">3. Payment Methods</h2>
          <p className="text-gray-700 leading-relaxed">
            Payments can be made via Bank Transfer, Cash at our office, or by Demand Draft/Cheque.
            All payments must be free of deductions or withholding taxes. Any bank charges incurred
            during remittance will be borne by the payer.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-normal mb-3">4. Itinerary Modifications</h2>
          <p className="text-gray-700 leading-relaxed">
            Itineraries are followed as planned once the tour begins. However, VisionFly Holidays may
            modify the itinerary due to unexpected events or circumstances beyond our control to ensure
            traveler safety and comfort.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-normal mb-3">
            5. Cancellation, No Show, and Early Departure Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you need to cancel your tour or services, you must notify us in writing. The following
            cancellation fees apply based on the date of notice:
          </p>

          <h3 className="font-normal text-lg mb-2">Payment Terms:</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border">Payment term period</th>
                  <th className="p-3 border">Advance payment</th>
                  <th className="p-3 border">Balance payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">30 days prior</td>
                  <td className="p-3 border">100% Payment on confirmation</td>
                  <td className="p-3 border">NA</td>
                </tr>
                <tr>
                  <td className="p-3 border">Travel within 60 Days</td>
                  <td className="p-3 border">60% Payment on confirmation</td>
                  <td className="p-3 border">40% Payment</td>
                </tr>
                <tr>
                  <td className="p-3 border">Travel within 61 Days & Above</td>
                  <td className="p-3 border">40% Payment</td>
                  <td className="p-3 border">60% Payment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-normal text-lg mb-2">Cancellation Terms:</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border">Booking Period</th>
                  <th className="p-3 border">Cancellation Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">45 Days & Above</td>
                  <td className="p-3 border">25% of the tour cost</td>
                </tr>
                <tr>
                  <td className="p-3 border">30 – 44 Days</td>
                  <td className="p-3 border">50% of the tour cost</td>
                </tr>
                <tr>
                  <td className="p-3 border">0 – 30 Days</td>
                  <td className="p-3 border">100% of the tour cost</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-normal text-lg mb-2">Please Note:</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>100% Cancellation on low-cost carrier bookings once confirmed.</li>
            <li>100% Cancellation if hotels/entrances booked and paid in advance.</li>
            <li>100% Cancellation during peak days or trade fairs.</li>
            <li>100% Cancellation once visa payment is done.</li>
            <li>Group bookings may follow different cancellation rules.</li>
            <li>Airline & hotel cancellation policies may override this policy.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            A minimum 15% service charge applies to cancellations made after booking. After the tour
            has started, refunds will be limited to recoverable amounts from service providers.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-normal mb-3">6. Refund Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Refunds for unused services will be processed according to the cancellation policy.
            Refunds may take 2–4 weeks due to banking procedures. All bank charges for refunds will be
            deducted from the refund amount.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-normal mb-3">7. Liabilities and Limitations</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Any increase in taxes, entrance fees, or fuel costs after tour cost finalization will be
            charged as extra.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            VisionFly Holidays acts as an intermediary between clients and third-party providers such
            as hotels, airlines, and transport companies. All bookings are subject to these providers’
            terms and conditions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Itineraries may change due to weather, road conditions, or other factors to ensure safety
            and comfort.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            We are not responsible for delays, itinerary changes, or extra costs arising from natural
            disasters, accidents, illness, adverse weather, political unrest, or other uncontrollable
            circumstances.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Travelers are responsible for their personal belongings. Travel insurance is not included
            and is recommended.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-normal mb-3">8. Passports and Visas</h2>
          <p className="text-gray-700 leading-relaxed">
            International travelers (excluding Nepal & Bhutan citizens) must carry a valid passport
            with at least six months' validity and a visa. Visa and passport fees are not included in
            tour packages.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-4">
          <h2 className="text-2xl font-normal mb-3">9. Health</h2>
          <p className="text-gray-700 leading-relaxed">
            Travelers with contagious diseases are not permitted on tours. If discovered during the
            trip, the participant will be required to leave the tour and arrange their own return home.
          </p>
        </section>

    
      </div>
    </div>
  );
}
