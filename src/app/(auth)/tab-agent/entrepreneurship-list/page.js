import dynamic from 'next/dynamic' 
const PageEntrepreneurship = dynamic(() => import('@/components/entrepreneurship/list-entrepreneurship/ListEntrepreneurship'), { ssr: false })

export const metadata = {
  title: "Listado de emprendimientos || Homez - Real Estate NextJS Template",
};

export default function Listentrepreneurship() {
  
  return (
    <section id="entrepreneurship-list">
      <PageEntrepreneurship />
    </section>
  );
}
