import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGyLecVfQ7mn0",
    unit_amount: 100 * 100,
    nickname: "Basic",
    offers: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLüefU8AHqHr",
    unit_amount: 200 * 100,
    nickname: "Premium",
    offers: [
      "5 Users",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLepZsZDsCNz",
    unit_amount: 300 * 100,
    nickname: "Business",
    offers: [
      "10 Users",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
  },
];

export const cloudSemiDedicated: Price[] = [
  {
    id: "price_1NQk5TLtGdoPVhGLecVfQ7mn0",
    unit_amount: 100 * 50,
    nickname: "Basic Plan",
    offers: [
      "1.000 users/100 sessions",
      "10GB (+€20/month for extra 10GB)",
      "3 tables, each table up to 1.000 documents",
      "3 REST APIs",
      "admin Dashboard access",
    ],
  },
  {
    id: "price_1NQk5TLtGdPVhGLeicVfQ7mn0",
    unit_amount: 100 * 60,
    nickname: "Business Plan",
    offers: [
      "5.000 users/500 sessions",
      "50GB (+€20/month for extra 10GB)",
      "5 tables, each table up to 5.000 documents",
      "7 REST APIs + AI integration",
      "admin Dashboard access",
      "push notifications + email"
    ],
  },
  {
    id: "price_1NQk5TLtGdPVhGLeucVfQ7mn0",
    unit_amount: 100 * 90,
    nickname: "Organization Plan",
    offers: [
      "10.000 users/1.000 sessions (+100 users for €10/month)",
      "100GB (+€20/month for extra 10GB)",
      "10 tables, each table up to 10.000 documents (extra 1 table €10/month)",
      "10 REST APIs  + AI integration",
      "admin Dashboard access",
      "Push notifications, email, and SMS"
    ],
  },
];

export const cloudDedicated: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhzGLecVfQ7mn0",
    unit_amount: 100 * 120,
    nickname: "Basic Plan",
    offers: [
      "1.000 users/100 sessions",
      "10GB (+€20/month for extra 10GB)",
      "3 tables, each table up to 1.000 documents",
      "3 REST APIs",
      "admin Dashboard access",
    ],
  },
  {
    id: "price_1NQtk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 100 * 130,
    nickname: "Business Plan",
    offers: [
      "5.000 users/500 sessions",
      "50GB (+€20/month for extra 10GB)",
      "5 tables, each table up to 5.000 documents",
      "7 REST APIs + AI integration",
      "admin Dashboard access",
      "push notifications + email"
    ],
  },
  {
    id: "price_1NQk5TLtGdPVhGLercVfQ7mn0",
    unit_amount: 100 * 160,
    nickname: "Organization Plan",
    offers: [
      "10.000 users/1.000 sessions (+100 users for €10/month)",
      "100GB (+€20/month for extra 10GB)",
      "10 tables, each table up to 10.000 documents (extra 1 table €10/month)",
      "10 REST APIs  + AI integration",
      "admin Dashboard access",
      "Push notifications, email, and SMS"
    ],
  },
];

export const webHosting: Price[] = [
  {
    id: "price_web_hosting_basic",
    unit_amount: 100 * 5,
    nickname: "Basic Plan",
    offers: [
      "100MB Webspace",
      "1GB Traffic",
      "1 Subdomains",
      "1 Email-addresses",
      "1 Email-accounts",
      "1 Email-forwarders",
      "1 FTP-accounts",
      "1 MySQL-databases",
      "admin Dashboard access",
    ],
  },
  {
    id: "price_web_hosting_business",
    unit_amount: 100 * 10,
    nickname: "Business Plan",
    offers: [
      "500MB Webspace",
      "5GB Traffic",
      "3 Subdomains",
      "3 Email-addresses",
      "3 Email-accounts",
      "3 Email-forwarders",
      "2 FTP-accounts",
      "2 MySQL-databases",
      "admin Dashboard access"
    ],
  },
  {
    id: "price_web_hosting_organization",
    unit_amount: 100 * 15,
    nickname: "Organization Plan",
    offers: [
      "1000MB Webspace",
      "Unlimited Traffic",
      "Unlimited Subdomains",
      "10 Email-addresses",
      "10 Email-accounts",
      "10 Email-forwarders",
      "10 FTP-accounts",
      "10 MySQL-databases",
      "Access to logs and Errors",
      "admin Dashboard access"
    ],
  },
];
