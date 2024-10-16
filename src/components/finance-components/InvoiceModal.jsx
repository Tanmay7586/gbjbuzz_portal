import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const InvoiceModal = ({ isOpen, onOpenChange }) => {
  const [showInvoice, setShowInvoice] = useState(false);

  const handleGenerateInvoice = () => {
    setShowInvoice(true);
  };

  const handleBack = () => {
    setShowInvoice(false);
  };

  const handleDownload = () => {
    console.log("Download clicked");
    // Implement download functionality here
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={`sm:max-w-[${
          showInvoice ? "90%" : "425px"
        }] max-h-[90vh] overflow-y-auto`}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {showInvoice ? "Generated Invoice" : "Invoice Options"}
          </DialogTitle>
          <DialogClose asChild>

          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          {!showInvoice ? (
            <>
              <Button
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-6 text-lg rounded-full"
                onClick={handleGenerateInvoice}
              >
                Generate Invoice
              </Button>
              <Button
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-6 text-lg rounded-full"
                onClick={() => console.log("Invoice Record clicked")}
              >
                Invoice Record
              </Button>
            </>
          ) : (
            <>
              <img
                src="/api/placeholder/800/600"
                alt="Invoice"
                className="w-full h-auto"
              />
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="px-4 py-2"
                >
                  Back
                </Button>
                <Button
                  variant="default"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2"
                  onClick={handleDownload}
                >
                  Download
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceModal;
