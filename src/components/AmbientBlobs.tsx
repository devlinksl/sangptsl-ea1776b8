/**
 * Site-wide ambient background blobs that give Liquid Glass surfaces
 * something rich and chromatic to refract.
 */
export function AmbientBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Soft warm orb */}
      <div
        className="ambient-blob"
        style={{
          width: 620,
          height: 620,
          top: -180,
          left: -120,
          background:
            "radial-gradient(circle, hsla(28, 95%, 75%, 0.45) 0%, transparent 70%)",
          animationDuration: "22s",
        }}
      />
      {/* Cool blue orb */}
      <div
        className="ambient-blob"
        style={{
          width: 540,
          height: 540,
          top: "30%",
          right: -160,
          background:
            "radial-gradient(circle, hsla(210, 95%, 78%, 0.40) 0%, transparent 70%)",
          animationDuration: "28s",
          animationDirection: "reverse",
        }}
      />
      {/* Lavender orb */}
      <div
        className="ambient-blob"
        style={{
          width: 480,
          height: 480,
          bottom: -140,
          left: "30%",
          background:
            "radial-gradient(circle, hsla(280, 80%, 80%, 0.35) 0%, transparent 70%)",
          animationDuration: "30s",
        }}
      />
      {/* Mint orb */}
      <div
        className="ambient-blob"
        style={{
          width: 420,
          height: 420,
          top: "55%",
          left: -100,
          background:
            "radial-gradient(circle, hsla(160, 80%, 78%, 0.30) 0%, transparent 70%)",
          animationDuration: "26s",
          animationDirection: "reverse",
        }}
      />
    </div>
  );
}
