import Image from "next/image";

type ProjectMediaProps = {
  src?: string;
  alt?: string;
  caption?: string;
  priority?: boolean;
};

export default function ProjectMedia({
  src,
  alt = "",
  caption,
  priority = false,
}: ProjectMediaProps) {
  return (
    <figure className="mt-16">
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
                Project media
              </p>
              <p className="mt-3 text-sm text-text-muted">
                Visual coming soon
              </p>
            </div>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}