import { createContext, useContext, ReactNode } from "react";

const ORDER_BASE = "https://order.dsopricing.com/order-page";

const AffiliateContext = createContext<string>("");

export function AffiliateProvider({ children }: { children: ReactNode }) {
  let affiliateId = "";
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    affiliateId = params.get("am_id") ?? "";
  }
  return <AffiliateContext.Provider value={affiliateId}>{children}</AffiliateContext.Provider>;
}

export function useOrderUrl(): string {
  const affiliateId = useContext(AffiliateContext);
  return affiliateId ? `${ORDER_BASE}?am_id=${affiliateId}` : ORDER_BASE;
}
