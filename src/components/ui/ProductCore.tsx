export default function ProductCore() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      <div className="absolute inset-[18%] rounded-full border border-border/80" />

      <div className="absolute inset-[25%] rounded-[35%] border border-text-muted/30 bg-surface shadow-[0_0_100px_rgba(237,232,223,0.06)] [transform:rotateX(58deg)_rotateZ(-24deg)]" />

      <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-[30%] border border-text-primary/20 bg-surface [transform:rotate(25deg)]" />

      <div className="absolute left-[22%] top-1/2 h-px w-[56%] -translate-y-1/2 bg-accent/80 shadow-[0_0_24px_rgba(255,77,28,0.6)]" />

      <div className="absolute left-1/2 top-[16%] h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_24px_rgba(255,77,28,0.7)]" />
    </div>
  );
}