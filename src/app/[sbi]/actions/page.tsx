import { ActionCard } from './ActionCard';
import { fetchFarmActionsWithParcels } from '@/app/server-actions/action';
import GenerateReport from '@/app/components/GenerateReport';

export default async function Page({ params }: { params: { sbi: string } }) {
  const { sbi } = params;
  const actions = await fetchFarmActionsWithParcels(sbi);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold">My Actions</h1>
        <div className='flex space-x-3'>
          <GenerateReport sbi={sbi} />
        </div>
      </div>
      <div className="pt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => <ActionCard key={action.code} sbi={sbi} action={action} />)}
      </div>
    </div>
  );
}
