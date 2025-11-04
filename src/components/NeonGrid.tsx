export const NeonGrid = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden pointer-events-none" style={{ perspective: '800px' }}>
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-full"
        style={{
          transform: 'rotateX(60deg) translateZ(-200px)',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 16, 240, 0.5), transparent)
          `,
          backgroundSize: '80px 80px, 80px 80px, 100% 100%',
          backgroundPosition: 'center bottom',
        }}
      />
      {/* Horizon glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, rgba(255, 16, 240, 0.4), transparent)',
        }}
      />
    </div>
  );
};
