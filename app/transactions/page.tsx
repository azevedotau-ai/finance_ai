import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transanctionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

const Transactions = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transanctionColumns} data={transactions} />
    </div>
  );
};

export default Transactions;
