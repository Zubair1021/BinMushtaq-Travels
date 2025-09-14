import React from 'react';
import sedan from '../../media/SedanCar.png';
import staria from '../../media/StariaCar.png';
import gmc from '../../media/Gmccar.png';
import hiace from '../../media/HiaceCar.png';
import bus from '../../media/Buses.png';

const vehicleData = [
  {
    name: 'Sedan Car (2020-25)',
    image: sedan,
    routes: [
      { route: 'Jed-Mak', price: 290 },
      { route: 'Jed-Med', price: 490 },
      { route: 'Mak-Med', price: 440 },
      { route: 'Med-Mak', price: 440 },
      { route: 'Mak-Jed', price: 240 },
      { route: 'Ziarat Mak or Med', price: 220 },
      { route: 'Med Apt-Htl', price: 180 },
      { route: 'Med Htl-Apt', price: 160 },
      { route: 'Mak Htl-Train Station', price: 190 },
      { route: 'Med Htl-Train Station', price: 190 },
      { route: 'Train Station-Mak Htl', price: 190 },
      { route: 'Train Station-Med Htl', price: 190 },
    ],
  },
  {
    name: 'Staria (2020-25)',
    image: staria,
    routes: [
      { route: 'Jed-Mak', price: 360 },
      { route: 'Jed-Med', price: 570 },
      { route: 'Mak-Med', price: 515 },
      { route: 'Med-Mak', price: 515 },
      { route: 'Mak-Jed', price: 315 },
      { route: 'Ziarat Mak or Med', price: 290 },
      { route: 'Med Apt-Htl', price: 200 },
      { route: 'Med Htl-Apt', price: 180 },
      { route: 'Mak Htl-Train Station', price: 210 },
      { route: 'Med Htl-Train Station', price: 210 },
      { route: 'Train Station-Mak Htl', price: 210 },
      { route: 'Train Station-Med Htl', price: 210 },
    ],
  },
  {
    name: 'GMC (2020-24)',
    image: gmc,
    routes: [
      { route: 'Jed-Mak', price: 465 },
      { route: 'Jed-Med', price: 940 },
      { route: 'Mak-Med', price: 890 },
      { route: 'Med-Mak', price: 890 },
      { route: 'Mak-Jed', price: 425 },
      { route: 'Ziarat Mak or Med', price: 420 },
      { route: 'Med Apt-Htl', price: 300 },
      { route: 'Med Htl-Apt', price: 300 },
      { route: 'Mak Htl-Train Station', price: 340 },
      { route: 'Med Htl-Train Station', price: 340 },
      { route: 'Train Station-Mak Htl', price: 340 },
      { route: 'Train Station-Med Htl', price: 340 },
    ],
  },
  {
    name: 'Hiace (2020-24)',
    image: hiace,
    routes: [
      { route: 'Jed-Mak', price: 410 },
      { route: 'Jed-Med', price: 665 },
      { route: 'Mak-Med', price: 615 },
      { route: 'Med-Mak', price: 615 },
      { route: 'Mak-Jed', price: 390 },
      { route: 'Ziarat Mak or Med', price: 390 },
      { route: 'Med Apt-Htl', price: 290 },
      { route: 'Med Htl-Apt', price: 290 },
      { route: 'Mak Htl-Train Station', price: 290 },
      { route: 'Med Htl-Train Station', price: 315 },
      { route: 'Train Station-Mak Htl', price: 315 },
      { route: 'Train Station-Med Htl', price: 315 },
    ],
  },
];

const busRates = [
  { route: 'JED-MAK-MAD-MAK-JED', rate: 2750 },
  { route: 'JED-MAK-MAD-JED OR JED-MAD-MAK-JED', rate: 2450 },
  { route: 'JED-MAK-MAD-APT OR MAD-APT-MAD-HTL-MAD-MAKJED', rate: 2350 },
];

const VehicleCards: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
    {vehicleData.map((vehicle) => (
      <div key={vehicle.name} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
        <img src={vehicle.image} alt={vehicle.name} className="w-24 h-16 object-contain mb-4" />
        <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-2 text-center">{vehicle.name}</h3>
        <ul className="w-full space-y-1 text-gray-700 dark:text-gray-200 text-sm">
          {vehicle.routes.map((r) => (
            <li key={r.route} className="flex justify-between border-b border-gray-100 dark:border-gray-700 py-1">
              <span>{r.route}</span>
              <span className="font-semibold">{r.price} SAR</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const BusRates: React.FC = () => (
  <div className="bg-primary-50 dark:bg-primary-900 rounded-2xl shadow-lg p-6 max-w-2xl mx-auto mb-8 flex flex-col items-center">
    <img src={bus} alt={bus} className="w-30 h-20 object-contain mb-4" />
    <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-4 text-center">Bus Rates</h3>
    <ul className="space-y-2 text-gray-800 dark:text-gray-100 text-base w-full">
      {busRates.map((bus) => (
        <li key={bus.route} className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
          <span>{bus.route}</span>
          <span className="font-semibold">{bus.rate} SAR</span>
        </li>
      ))}
    </ul>
  </div>
);

export { VehicleCards, BusRates };
