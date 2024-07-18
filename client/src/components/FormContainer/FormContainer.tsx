import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import backgroundImage from "../../assets/backgroundImage.jpg"; 

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const [fullUrl, setFullUrl] = React.useState<string>("");
  const { updateReloadState } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/api/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-gray-100 rounded-lg shadow-md relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.2,
          }}
        />
        <div className="p-10 relative">
          <h2 className="text-3xl font-bold text-center mb-4">Short Link Generator</h2>
          <p className="text-gray-800 text-center mb-2">
            Paste your long URL to shorten it quickly.
          </p>
          <p className="text-gray-600 text-center mb-4">
            Use our tool to create shortened, neat links for easier sharing.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
            <span className="text-gray-500 font-medium mb-2 md:mb-0 md:mr-2">shorturl.link /</span>
            <input
              type="text"
              placeholder="Add your link"
              required
              className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0 md:mr-2 bg-transparent relative"
              value={fullUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
            
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              style={{ minWidth: '150px' }}
            >
              Shorten
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
