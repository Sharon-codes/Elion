import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Elion Platform Waitlist",
  description: "Join the Elion Closed Research Alpha Waitlist.",
};

export default function WaitlistPage() {
  return (
    <div className="fixed inset-0 w-full h-full bg-white dark:bg-[#090D16] overflow-hidden">
      <iframe
        data-tally-src="https://tally.so/r/kdBxYM?transparentBackground=1&formEventsForwarding=1"
        src="https://tally.so/r/kdBxYM?transparentBackground=1&formEventsForwarding=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Elion Platform Waitlist"
        className="absolute inset-0 w-full h-full border-0"
      />
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
    </div>
  );
}
