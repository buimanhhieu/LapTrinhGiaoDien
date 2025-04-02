import React from "react";

// DetailedReport Component
const DetailedReport = () => {
  const reports = [
    { name: "Elizabeth Lee", company: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New" },
    { name: "Carlos Garcia", company: "SmoozeShift", value: "$747", date: "24/07/2023", status: "New" },
    { name: "Elizabeth Bailey", company: "Prime Time Telecom", value: "$564", date: "08/08/2023", status: "In-progress" },
    { name: "Ryan Brown", company: "OmniTech Corporation", value: "$541", date: "31/08/2023", status: "In-progress" },
    { name: "Ryan Young", company: "DataStream Inc.", value: "$769", date: "01/05/2023", status: "Completed" },
    { name: "Hailey Adams", company: "FlowRush", value: "$922", date: "10/06/2023", status: "Completed" },
  ];

  return (
    <section className="bg-white p-4 shadow-md rounded-md m-4">
      <h3 className="text-lg font-semibold mb-2">Detailed Report</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Customer Name</th>
            <th className="p-2">Company</th>
            <th className="p-2">Order Value</th>
            <th className="p-2">Order Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{report.name}</td>
              <td className="p-2">{report.company}</td>
              <td className="p-2">{report.value}</td>
              <td className="p-2">{report.date}</td>
              <td className={`p-2 ${report.status === "Completed" ? "text-green-500" : report.status === "In-progress" ? "text-yellow-500" : "text-blue-500"}`}>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DetailedReport;
