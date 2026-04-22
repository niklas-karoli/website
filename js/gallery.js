// Simulating folder structure
const galleryData = {
    aviation: [
        'https://images.unsplash.com/photo-1542296332-2e4473faf563',
        'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3',
        'https://images.unsplash.com/photo-1464039397811-476f652a343b',
        'https://images.unsplash.com/photo-1520437358207-323b43b50729',
        'https://images.unsplash.com/photo-1559268950-2d7ceb2eee35',
        'https://images.unsplash.com/photo-1569154941061-e231b4725ef1',
        'https://images.unsplash.com/photo-1517976487492-5750f3195933',
        'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96'
    ],
    travel: [
        'https://images.unsplash.com/photo-1500835595337-f7303a05ec95',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
        'https://images.unsplash.com/photo-1503221043305-f7498f8b7888',
        'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a'
    ]
};

function initGallery() {
    const aviationContainer = document.getElementById('airplane-images-dynamic');
    const travelContainer = document.getElementById('travel-images-dynamic');

    if (aviationContainer) {
        galleryData.aviation.forEach((src, index) => {
            const div = document.createElement('div');
            div.className = `gallery-item min-w-[300px] md:min-w-[500px] aspect-video rounded-3xl overflow-hidden border border-white/10 cyber-glow transition-all duration-500`;
            div.innerHTML = `
                <div class="relative w-full h-full">
                    <img src="${src}?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Aviation ${index}">
                    <div class="absolute bottom-4 left-4 text-[10px] mono text-neonGreen/50">#FLIGHT_DATA_${index+1024}</div>
                </div>`;
            aviationContainer.appendChild(div);
        });
    }

    if (travelContainer) {
        galleryData.travel.forEach((src, index) => {
            const div = document.createElement('div');
            // Randomize aspect ratio simulation for "Creative Layout"
            const span = index % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1';
            div.className = `gallery-item ${span} aspect-square md:aspect-auto rounded-3xl overflow-hidden border border-white/10 cyber-glow transition-all duration-500`;
            div.innerHTML = `<img src="${src}?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Travel ${index}">`;
            travelContainer.appendChild(div);
        });
    }
}

document.addEventListener('DOMContentLoaded', initGallery);
