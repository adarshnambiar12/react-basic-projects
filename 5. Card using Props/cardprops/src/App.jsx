import React, { useState } from "react";
import Card from "./Components/Card";
import DetailedView from "./Components/DetailedView";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      name: "The Taj Mahal",
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.",
      detailedContent: "The Taj Mahal is a beautiful white marble monument in Agra, India, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, who died in 1631. The construction of the tomb started in 1632 and took nearly 17 years to complete, with the whole complex finished by 1653. The Taj Mahal is famous for its stunning architecture, combining Indian, Persian, and Islamic styles, and is surrounded by peaceful gardens, a mosque, and a guest house. Over 20,000 workers helped build it, and the design is symmetrical and perfectly balanced. Today, it's one of the most famous landmarks in the world, attracting millions of visitors each year and is recognized as a symbol of love and beauty."
    },
    {
      name: "The Great Wall of China",
      image: "https://images.pexels.com/photos/1423580/pexels-photo-1423580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "It is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China.",
      detailedContent: "The Great Wall of China is a massive stone wall built over 2,000 years ago to protect China from invasions. Stretching more than 13,000 miles, it’s not a single continuous wall but a series of walls and fortifications built by different emperors. The wall is a stunning feat of engineering, winding through mountains, deserts, and grasslands, and remains one of the most iconic landmarks in the world, symbolizing China’s strength and determination."
    },
    {
      name: "Christ the Redeemer",
      image: "https://images.pexels.com/photos/17782075/pexels-photo-17782075/free-photo-of-christ-the-redeemer-statue-in-rio-de-janeiro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Christ the Redeemer is an iconic statue of Jesus Christ in Rio de Janeiro, Brazil, standing 98 feet tall.",
      detailedContent: "Christ the Redeemer is a giant statue of Jesus Christ in Rio de Janeiro, Brazil. Standing at 98 feet tall, with arms outstretched, it overlooks the city from the top of Mount Corcovado. Built in 1931, the statue is made of concrete and soapstone, and it’s one of the most famous symbols of Christianity. Visitors can take a fun train ride up the mountain to see the statue and enjoy breathtaking views of Rio."
    },
    {
      name: "Colosseum",
      image: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "The Colosseum is an ancient amphitheater in the center of Rome, Italy, known for gladiatorial contests and public spectacles.",
      detailedContent: "The Colosseum in Rome, Italy, is an ancient amphitheater that could hold up to 80,000 spectators. Built around 70-80 AD, it was used for gladiator fights, public spectacles, and mock sea battles. Although damaged by earthquakes and time, the Colosseum remains a powerful symbol of ancient Roman engineering and entertainment, attracting millions of visitors each year."
    },
    {
      name: "Chichen Itza",
      image: "https://images.pexels.com/photos/12046436/pexels-photo-12046436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Chichen Itza is a massive Mayan archaeological site located in the Mexican state of Yucatan, famous for the Pyramid of Kukulcan.",
      detailedContent: "Chichen Itza is an ancient Mayan city located in Mexico’s Yucatan Peninsula. The site is famous for the El Castillo pyramid, also called the Temple of Kukulcán, which was used for astronomical and religious purposes. Built around the 9th century, Chichen Itza was once a thriving city and is now one of the most impressive archaeological sites in the world, offering a glimpse into the advanced civilization of the Mayans."
    },
    {
      name: "Machu Picchu",
      image: "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.",
      detailedContent: "Machu Picchu is a breathtaking Incan city located high in the Andes Mountains of Peru. Built in the 15th century, it was lost to the outside world until its rediscovery in 1911. The city is known for its stunning stone buildings, terraces, and incredible views. Machu Picchu remains one of the most important archaeological sites in South America and attracts travelers who hike the Inca Trail to reach it."
    },
    {
      name: "Petra",
      image: "https://images.pexels.com/photos/18717331/pexels-photo-18717331/free-photo-of-petra-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Petra is an archaeological city in Jordan, famous for its rock-cut architecture and water conduit system.",
      detailedContent: "Petra is an ancient city in Jordan, famous for its rock-cut architecture and water channels. Built by the Nabateans around 300 BC, Petra was once a thriving trade center. The most iconic part of Petra is Al-Khazneh, a temple carved into the pink sandstone cliffs. Visitors enter through a narrow gorge, known as the Siq, before emerging to the stunning view of this lost city. Petra is one of the most popular tourist destinations in the Middle East. It attracts millions of visitors each year, offering a unique blend of cultural and natural beauty."
    },
    {
      name: "Angkor Wat",
      image: "https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Angkor Wat is a temple complex in Cambodia, originally constructed as a Hindu temple but later converted to a Buddhist temple.",
      detailedContent: "Angkor Wat is a massive temple complex in Cambodia, originally built in the 12th century by the Khmer Empire as a Hindu temple but later converted to a Buddhist site. The temple is renowned for its intricate carvings and towering spires. Angkor Wat is the largest religious monument in the world and remains an important symbol of Cambodian culture, attracting millions of visitors each year. It is one of the most popular tourist destinations in Southeast Asia."
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center flex-col py-12 px-4">
      <h1 className="font-bold text-white text-3xl sm:text-2xl md:text-4xl text-center my-8" style={{ fontFamily: 'Poppins' }}>The World’s Most Breathtaking Landmarks: Exploring the 7 Wonders</h1>

      {selectedCard ? (
        <DetailedView card={selectedCard} onBackClick={handleBackClick} className={selectedCard ? "animate-slide-left" : "animate-slide-right"} />

      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;