import React from "react";

const NDA = () => {
  return (
    <div className="mx-auto max-w-7xl rounded-3xl bg-gray-100 px-8 py-8">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Non-Disclosure Agreement (NDA)
      </h1>
      <h2 className="mb-4 text-center text-xl font-semibold">
        Between [Investor's Name/Organization] and [Entrepreneur's
        Name/Organization]
      </h2>

      <div className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">Introduction</h3>
        <p className="mb-4 text-base">
          This Non-Disclosure Agreement ("Agreement") is entered into by and
          between the undersigned parties in connection with the disclosure of
          confidential information regarding the business idea and related
          materials ("Confidential Information") from the Entrepreneur to the
          Investor.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">
          Confidential Information:
        </h3>
        <p className="mb-4 text-base">
          Confidential Information shall include but is not limited to:
        </p>
        <ul className="ml-8 list-disc">
          <li>Business plans</li>
          <li>Financial Information</li>
          <li>Intellectual property</li>
          <li>Trade Secrets</li>
          <li>
            Any other information disclosed by the Entrepreneur to the Investor
            that is marked as confidential or should reasonably be understood to
            be confidential.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">Purpose:</h3>
        <p className="mb-4 text-base">
          The Investor agrees to review the Entrepreneur's startup pitch
          ("Pitch") on the AdiSoft platform for the purpose of evaluating
          potential investment opportunities.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">
          Non-Disclosure Obligations:
        </h3>
        <p className="mb-4 text-base">
          The Investor agrees to maintain the confidentiality of the
          Confidential Information and shall not disclose, directly or
          indirectly, any part of the Confidential Information to any third
          party without the prior written consent of the Entrepreneur.
        </p>
        <p className="mb-4 text-base">
          The Investor agrees to use the Confidential Information solely for the
          purpose of evaluating the Pitch and shall not use it for any other
          purpose without the prior written consent of the Entrepreneur.
        </p>
        <p className="mb-4 text-base">
          The obligations of confidentiality under this Agreement shall survive
          the termination of any discussions or negotiations between the parties
          and shall remain in effect for a period of [insert duration] from the
          date of disclosure of the Confidential Information.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">Exceptions:</h3>
        <p className="mb-4 text-base">
          The obligations of confidentiality under this Agreement shall not
          apply to any information that:
        </p>
        <ul className="ml-8 list-disc">
          <li>
            Is or becomes publicly available through no fault of the Investor.
          </li>
          <li>
            Was rightfully known to the Investor prior to disclosure by the
            Entrepreneur.
          </li>
          <li>
            Is independently developed by the Investor without reference to the
            Confidential Information.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">Signatures:</h3>
        <p className="mb-4 text-base">
          IN WITNESS WHEREOF, the parties hereto have executed this Agreement as
          of the date first above written.
        </p>
      </div>

      <button className="mx-auto flex rounded-md bg-rgb-green px-4 py-2 text-white hover:bg-green-600">
        Accept Terms and Conditions
      </button>
    </div>
  );
};

export default NDA;
