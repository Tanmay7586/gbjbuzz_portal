import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

const TransactionsPage = () => {
  const transactions = [
    {
      name: "Shwetank Gopnarayan",
      date: "5 July 2024",
      description: "Subscription",
      amount: "Rs 1000",
      category: "Categorized",
      status: true,
    },
    {
      name: "Sagar Tayde",
      date: "10 July 2024",
      description: "API",
      amount: "Rs 2000",
      category: "Sales",
      status: true,
    },
    {
      name: "Sarthak Kakad",
      date: "23 July 2024",
      description: "Website",
      amount: "Rs 3000",
      category: "Income",
      status: true,
    },
    {
      name: "Tejas Patil",
      date: "2 August 2024",
      description: "Course",
      amount: "Rs 4000",
      category: "Sales",
      status: false,
    },
    {
      name: "Niraj Kamble",
      date: "5 August 2024",
      description: "Cloud",
      amount: "Rs 5000",
      category: "Income",
      status: false,
    },
    {
      name: "Sameer Agam",
      date: "10 July 2024",
      description: "Subscription",
      amount: "Rs 6000",
      category: "Sales",
      status: false,
    },
  ];

  return (
    <div className=" p-10 w-full mx-auto">
      {" "}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-yellow-500">TRANSACTION</h1>
        <div className="space-x-2">
          <Button variant="secondary">Add Income</Button>
          <Button className="bg-green-500 text-white">Add Expense</Button>{" "}
        </div>
      </div>
      <div className="flex justify-between mb-6 space-x-2">
        {["Status", "Type", "Category", "Amount", "From", "To"].map(
          (filter) => (
            <Select key={filter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={`${filter}: All`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {/* Add more options as needed */}
              </SelectContent>
            </Select>
          )
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Transaction</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.name}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>
                {transaction.status ? (
                  <Check className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsPage;
