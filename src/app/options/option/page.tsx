import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from "next/link";
import { fetchActionName, fetchOptionEvidence, fetchParcelName } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    actCode: string;
    parcelId: string;
  };
}) {
  const { actCode, parcelId } = searchParams;
  const data = await fetchOptionEvidence(actCode, parcelId);
  const [parcelName, actName] = await Promise.all([
    fetchParcelName(parcelId),
    fetchActionName(actCode)
  ])
  return (
    <div className="w-full">
      <div className="flex">
        <Link href="/options">
          <ArrowLeftIcon className="size-6 ml-auto"/>
        </Link>
        <div className="ml-5 flex-row w-1/2 items-center justify-between">
          <h1 className={`font-semibold text-2xl`}>{actCode} - {actName}</h1>
          <h2 className={`text-xl`}>Showing evidencing for {parcelName}</h2>
          
        </div>
      </div>
      
      <div className="my-5 max-w-4xl relative overflow-x-auto">
        <h2 className="text-xl font-semibold">Evidence</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                Title
              </th>
              <th scope="col">
                Date
              </th>
              <th scope="col">
                File
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((ev) => (
              <tr key={ev.id}>
                <th scope="row">
                  {ev.title}
                </th>
                <td>
                  {new Date(ev.date).toLocaleDateString()}
                </td>
                <td>
                  {ev.fileUrl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href={{
        pathname: "/options/option/add-evidence", 
        query: searchParams
      }}>
          <button className="btn btn-primary">Add Evidence</button>
      </Link>
    </div>
  );
}