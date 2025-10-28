import React from 'react';

const blocks = [
  'Oceania',
  'East Asia',
  'South/Southeast Asia',
  'Middle East',
  'Europe',
  'Africa',
  'Latin America',
  'North America',
];

export default function SchedulePage() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Schedule</h1>
      <p>
        Our 24‑hour stream rotates through eight regional blocks. Each block highlights music,
        speeches and culture from its region. The order resets every 8 hours.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        {blocks.map((block) => (
          <li key={block}>{block}</li>
        ))}
      </ul>
    </main>
  );
}
