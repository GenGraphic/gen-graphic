import { headers } from "next/headers";

export default function Head() {
  const headersList = headers();
  const host = headersList.get('host') || 'gengraphic.ro';
  const path = headersList.get('x-invoke-path') || '/';
  const canonical = `https://${host}${path}`;

  return (
    <>
      <title>
        Expert IT Consulting & Web Development Solutions for Businesses
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="At GenGraphic, we specialize in custom web and mobile app development, cloud hosting services, and rapid backend solutions with Appwrite. Our tailored solutions help businesses build scalable applications and grow their digital presence with ease." />
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="canonical" href={canonical} />
    </>
  );
}
