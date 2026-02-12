import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function ProductImportPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Number of columns does not correspond to the number of rows in the header (Rows: 1, 2, 3, 4, etc...)",
      answer: "This error occurs when the number of columns in your data rows doesn't match the header row. Please ensure all rows have the same number of columns."
    },
    {
      question: "We can't find required columns: {attribute_code}. Column names: '{column_name}' are invalid",
      answer: "This means one or more required columns are missing from your import file. Check that all required columns are present and named correctly."
    },
    {
      question: "Value for {attribute_code} attribute contains incorrect value, see acceptable values on settings specified for Admin (Rows: 3) Invalid value for Attribute Set column (set doesn't exist)? (Rows: 3, 4)",
      answer: "The value in the specified column doesn't match the acceptable values. Please verify your data against the allowed values in the admin settings."
    },
    {
      question: "Invalid value for Attribute Set column (set doesn't exist)? (Rows: 3, 4)",
      answer: "The Attribute Set specified in these rows doesn't exist in the system. Please use an existing attribute set or create a new one first."
    },
    {
      question: "Could not ping search engine: No alive nodes found in your cluster",
      answer: "This is a server connectivity issue. Please contact support or check your server configuration."
    },
    {
      question: "Category mismatch at row (number): {category_name}",
      answer: "The category specified doesn't match the expected format or doesn't exist. Please verify the category name and structure."
    }
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="max-w-6xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Product Import</h1>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <div className="mb-6">
            <p className="text-sm text-gray-700">
              Download Xlsx Sample File{' '}
              <a href="#" className="text-brand hover:underline">here</a>.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select File to Import (XLSX format)
            </label>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-medium file:bg-white file:text-gray-700 hover:file:bg-gray-50"
            />
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-600">Selected: {selectedFile.name}</p>
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">FAQs</h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
                >
                  <span className="text-sm text-gray-900 pr-4">{faq.question}</span>
                  <Plus
                    size={20}
                    className={`text-gray-600 flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                    <p className="text-sm text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
