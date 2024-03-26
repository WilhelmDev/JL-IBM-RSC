import CallToActions from "@/components/common/CallToActions";
import HeaderV2 from "@/components/common/HeaderV2";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import ComapareTableCustom from "@/components/compare-property/compareTable";

export const metadata = {
  title: "Compare  || JL Bienes Raices",
};

const Compare = () => {
  return (
    <>
      {/* Main Header Nav */}
      <HeaderV2 />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}



      {/* Our Compare Area */}
      <section className="our-compare">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="table-style2 table-responsive">
                <ComapareTableCustom />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Compare Area */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Compare;
