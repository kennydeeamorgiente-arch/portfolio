import type { SVGProps } from "react";

type BrandIconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M14.2 8.1V6.7c0-.7.5-.9.9-.9h2.1V2.3L14.3 2c-3.2 0-4.9 1.9-4.9 5.3v.8H6.8v3.8h2.6V22h4.1V11.9h3.1l.5-3.8h-3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitHubIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.6 8c-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6a3.9 3.9 0 0 1 1 2.7c0 3.8-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3.3c0 .3.2.6.8.5A10 10 0 0 0 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.9 2.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.1A4.9 4.9 0 1 1 12 17a4.9 4.9 0 0 1 0-9.9Zm0 2A2.9 2.9 0 1 0 12 15a2.9 2.9 0 0 0 0-5.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M5.2 8.9H2.4V22h2.8V8.9ZM3.8 2A1.8 1.8 0 1 0 3.8 5.6 1.8 1.8 0 0 0 3.8 2Zm7.2 6.9H8.3V22H11v-6.8c0-1.8.8-3.2 2.5-3.2 1.5 0 2.1 1.1 2.1 3V22h2.8v-7.7c0-3.8-2-5.6-4.6-5.6-2 0-3.1 1.1-3.6 1.9h-.1l-.1-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
