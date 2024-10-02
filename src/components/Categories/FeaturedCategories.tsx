import React from 'react';

const categories = [
  {
    title: 'Popular',
    imageUrl: 'https://images7.alphacoders.com/118/1183638.jpeg',
  },
  {
    title: 'Trending',
    imageUrl: 'https://source.unsplash.com/random/300x200?trending-movie',
  },
  {
    title: 'Top Rated',
    imageUrl: 'https://source.unsplash.com/random/300x200?top-rated-movie',
  },
  {
    title: 'New Releases',
    imageUrl: 'https://source.unsplash.com/random/300x200?new-releases-movie',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="bg-background py-10">
      <div className="mx-8 md:mx-16 xl:mx-32 mb-8 md:mb-16 xl:mb-24">
        <h2 className="text-white text-4xl font-bold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-200"
                style={{
                  filter: 'grayscale(0%)',
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-2xl bg-background bg-opacity-50 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
