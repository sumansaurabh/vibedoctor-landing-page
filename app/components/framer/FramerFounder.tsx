export function FramerFounder() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04070d] py-24" id="founder-note">
      {/* Background shape */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[60%] w-[120%] -rotate-[13deg] bg-gradient-to-t from-cyan-500/[0.02] to-transparent rounded-[100px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#04070d] px-4 py-1.5">
          <svg className="h-4 w-4 text-cyan-300" viewBox="0 0 19.498 18.632" fill="currentColor">
            <path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
            Why We Built This
          </span>
        </div>

        {/* Quote */}
        <h3 className="mb-10 text-2xl font-medium leading-relaxed tracking-tight text-white/40 sm:text-3xl">
          AI coding tools made building easy. Shipping safely to{" "}
          <span className="italic text-[#d5dbe6]">customer-owned cloud</span>{" "}
          is still the bottleneck. VibeDoctor closes that gap.
        </h3>

        {/* Author */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white/10">
            <img
              src="https://framerusercontent.com/images/W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg"
              alt="Co-founder"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm text-white/40">
            Suman Saurabh, Co-founder, VibeDoctor
          </p>
        </div>
      </div>
    </section>
  );
}
