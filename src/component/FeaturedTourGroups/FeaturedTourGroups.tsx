import React from "react";
import nature from '../../assets/others/natures.jpg';
import culture from '../../assets/others/culture.jpg';
import adventure from '../../assets/others/adventure.jpg';

interface TourGroup {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

const tourGroups: TourGroup[] = [
    {
        id: '1',
        name: 'Nature Explorers',
        description: 'Join us for an exciting exploration of the world\'s most beautiful natural landscapes.',
        imageUrl: nature
    },
    {
        id: '2',
        name: 'Cultural Heritage',
        description: 'Experience the rich cultural heritage of ancient civilizations and modern societies.',
        imageUrl: culture
    },
    {
        id: '3',
        name: 'Adventure Seekers',
        description: 'Embark on thrilling adventures with our expert guides and fellow thrill-seekers.',
        imageUrl: adventure
    }
];

const FeaturedTourGroups: React.FC = () => {
    return (
        <div className="py-12">
            <div className="max-w-screen-2xl mx-auto px-4">
                <h2 className="font-bold text-4xl text-center text-gray-800 mb-12">Unique Featured Tour Groups</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tourGroups.map((group) => (
                        <div key={group.id} className="relative overflow-hidden shadow-lg">
                            <img 
                                src={group.imageUrl} 
                                alt={group.name} 
                                className="w-full h-96 object-cover transform transition-transform duration-300 hover:scale-105" 
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                                <h3 className="font-bold text-3xl">{group.name}</h3>
                                <p className="mt-2">{group.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedTourGroups;
