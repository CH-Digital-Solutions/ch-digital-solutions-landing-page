const GlassCard = ({ children }) => {
  return (
    <div
      className="
      relative 
      rounded-3xl
      border border-[var(--border-color)]
      bg-[var(--bg-card)]
      backdrop-blur-xl
      p-8
      transition
      hover:border-[var(--border-hover)]
      hover:bg-[var(--accent-light)]
      "
      style={{ boxShadow: 'var(--shadow-soft)' }}
    >
      {children}
    </div>
  );
};

export default GlassCard;