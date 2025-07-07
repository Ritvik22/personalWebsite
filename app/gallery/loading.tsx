export default function GalleryLoading() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="h-12 w-48 bg-gray-700 rounded-lg animate-pulse mx-auto mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-gray-700 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </main>
  );
} 