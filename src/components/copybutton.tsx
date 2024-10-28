import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { FaCheck } from "react-icons/fa6";
import { CheckCheckIcon } from "lucide-react";

interface CopyButtonProps {
  inputValue: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ inputValue }) => {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(inputValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <button
      onClick={handleCopy}
      onMouseLeave={() => setCopied(false)}
      className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-10 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-in-out gap-2"
    >
      {copied ? (
        <>
          Email copiado com sucesso!
          <CheckCheckIcon className="h-5 w-5 text-white ml-2 transition-all ease-in" />
        </>
      ) : (
        <>
          Email para contato
          <FaCheck className="h-5 w-5 text-white ml-2 transition-all ease-out" />
        </>
      )}
    </button>
  );
};

export default CopyButton;
