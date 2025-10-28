import React from 'react';

interface Resource {
  title: string;
  url: string;
  description: string;
  region: string;
}

const resources: Resource[] = [
  {
    title: 'What is a union?',
    url: 'https://aflcio.org/what-union',
    description: 'Starter primer explaining what unions are and why they matter.',
    region: 'North America',
  },
  {
    title: 'Labor History Timeline',
    url: 'https://www.history.com/topics/labor',
    description: 'A broad overview of major events in labor history.',
    region: 'Global',
  },
];

export default function LibraryPage() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Library</h1>
      <p>
        Browse our curated list of resources to learn more about labor movements around the
        world. This list is just a starting point — feel free to contribute your own
        suggestions as you build out the full database.
      </p>
      <div className="space-y-4">
        {resources.map((res) => (
          <div key={res.title} className="p-4 border border-gray-200 rounded-2xl shadow-sm">
            <h2 className="text-lg font-bold mb-1">
              <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-unionRed hover:underline">
                {res.title}
              </a>
            </h2>
            <p className="text-sm text-gray-700 mb-1">{res.description}</p>
            <p className="text-xs text-gray-500 italic">Region: {res.region}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
