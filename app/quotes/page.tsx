import type { Metadata } from "next";
import QuoteLab from "./quote-lab";

export const metadata: Metadata = {
  title: "Quote Lab — Alex Experience Lab",
  description: "An editorial motion studio for Alex's short thoughts and quotes.",
};

export default function QuotesPage() {
  return <QuoteLab />;
}
