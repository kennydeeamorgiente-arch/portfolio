import Image from "next/image";
import type { Certification } from "@/types/portfolio";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="cert-card">
      <div className="certificate-window">
        <Image
          src={certification.image}
          alt={`${certification.title} certificate proof`}
          width={720}
          height={520}
          className="cert-card-image aspect-[1.38] w-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-semibold uppercase">
            {certification.issuer}
          </p>
          <span className="cert-seal" aria-hidden="true">
            OK
          </span>
        </div>
        <h3 className="mt-2 text-xl font-semibold">{certification.title}</h3>
        <p className="mt-3 text-sm font-semibold text-[#6f695f]">
          Issued {certification.issued} / ID {certification.credentialId}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className="cert-scanline mt-5" aria-hidden="true" />
      </div>
    </article>
  );
}
