"use client"; // This is a client-side component

import Form
 from "@/app/ui/options/option/create-evidence-form";

export default function Page({
    searchParams,
  }: {
    searchParams: {
      actCode: string;
      parcelId: string;
    };
  }) {
    return (
        <main>
            <Form actCode={searchParams.actCode} parcelId={searchParams.parcelId} />
        </main>
    )
  }