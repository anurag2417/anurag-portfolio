
import Image from "next/image";

type ProjectMediaProps = {
  src?: string;
  alt?: string;
  caption?: string;
  priority?: boolean;
};

export default function ProjectMedia({
  src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85",
  alt = "Developer workspace",
  caption,
  priority = false,
}: ProjectMediaProps) {
  return (
    <figure className="mt-16">
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
