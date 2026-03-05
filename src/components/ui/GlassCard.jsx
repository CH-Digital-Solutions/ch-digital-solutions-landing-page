const GlassCard = ({ children }) => {
  return (
    <div
      className="
      relative 
      rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_0_40px_rgba(255,255,255,0.05)]
      p-8
      transition
      hover:border-white/20
      hover:bg-white/10
      "
    >
      {children}
    </div>
  );
};

export default GlassCard;