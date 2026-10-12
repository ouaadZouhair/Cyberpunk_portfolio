const SkeletonCard = ({ featured = true }: { featured?: boolean }) => {
  const borderClass = featured ? "border-highlight/30" : "border-secondary/30";
  const shimmerClass = featured ? "via-highlight/10" : "via-secondary/10";

  return (
    <div
      className={`relative bg-black/30 backdrop-blur-lg border-4 overflow-hidden ${borderClass}`}
    >
      <div className="relative w-full h-[180px] md:h-[260px] overflow-hidden bg-white/5">
        <div
          className={`absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent ${shimmerClass} to-transparent`}
        />
      </div>
    </div>
  );
};

export default SkeletonCard;
