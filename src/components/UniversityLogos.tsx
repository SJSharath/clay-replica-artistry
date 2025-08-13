export function UniversityLogos() {
  // University logos - using placeholder data for now
  const universities = [
    "Harvard", "MIT", "Stanford", "Princeton", "Yale", "Columbia", 
    "Berkeley", "Cornell", "Carnegie Mellon", "Duke", "Northwestern", "UPenn"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8 text-muted-foreground">
          Our mentors come from top universities worldwide
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set */}
            {universities.map((uni, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="w-24 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground text-center px-2">
                    {uni}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {universities.map((uni, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 mx-8">
                <div className="w-24 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground text-center px-2">
                    {uni}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}