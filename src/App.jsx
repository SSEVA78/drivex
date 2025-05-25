import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">AutoVision™ – Adaptateur CarPlay Sans Fil</h1>
        <p className="text-lg mt-2 text-gray-600">Installe-le une fois, oublie les câbles à vie.</p>
      </header>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-72 w-full object-cover md:h-full md:w-96"
            src="https://m.media-amazon.com/images/I/61m-DQbpD7L._AC_SL1500_.jpg"
            alt="Adaptateur CarPlay Sans Fil"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Technologie Auto</div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            Adaptateur CarPlay Sans Fil – Universel
          </h2>
          <p className="mt-2 text-gray-500">
            Branche-le une fois et ton iPhone se connecte automatiquement à CarPlay à chaque démarrage. Plus besoin de câbles.
            Ultra compact, rapide à détecter, compatible 98% des véhicules avec CarPlay filaire.
          </p>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            <li>Installation en 10 secondes</li>
            <li>Compatible iOS 10+ (iPhone 6S minimum)</li>
            <li>Connexion automatique dès le démarrage</li>
            <li>Compact & discret, zéro encombrement</li>
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">89,90 €</span>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Commander maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
