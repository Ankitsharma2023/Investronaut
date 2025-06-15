import Image from "next/image";
import FeatureImg01 from "@/public/images/features-02-overlay-01.png";
import FeatureImg02 from "@/public/images/features-02-overlay-02.png";
import FeatureImg03 from "@/public/images/features-02-overlay-03.png";
import Travel from "@/public/images/Travel.png"; 

export default function FeaturesHome() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center md:pb-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Take your pitch into orbit 
            </h2>
            <p className="text-lg text-gray-700">
            We use powerful, intelligent algorithms to match founders with the right investors based on industry, stage, location, and investment interests—making fundraising faster, smarter, and more targeted.
            </p>
          </div>
          {/* Illustration */}
          

{/* Illustration */}
<div
  className="group relative mx-auto mb-8 flex w-full max-w-[500px] justify-center md:mb-12"
  data-aos="zoom-y-out"
>
  <div className="relative w-[300px] h-[300px] flex justify-center items-center">
    {/* Planet */}
    <div 
      className="relative w-[65%] h-[65%] rounded-full flex items-center origin-center"
      style={{
        backgroundColor: '#546c8c',
        boxShadow: 'inset 2px -10px 0px rgba(0, 0, 0, 0.1)',
        animation: 'planet 5s ease-in-out infinite alternate',
        transformOrigin: 'center center'
      }}
    >
      {/* Planet Ring */}
      <div 
        className="absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
        style={{
          backgroundColor: '#bacbd9',
          transformOrigin: '33% center',
          boxShadow: '2px -10px 0px rgba(0, 0, 0, 0.1), inset -5px -10px 0px rgba(0, 0, 0, 0.1)',
          animation: 'ring 3s linear infinite'
        }}
      >
        {/* Small ball on ring */}
        <div 
          className="absolute w-[10px] h-[30px] rounded-full z-10"
          style={{
            backgroundColor: '#7ea1bf',
            left: 'calc(0px - 5px)',
            boxShadow: 'inset -3px 3px 0px rgba(0, 0, 0, 0.2)'
          }}
        />
        {/* Inner ring */}
        <div 
          className="absolute w-[240px] h-[240px] rounded-full"
          style={{
            backgroundColor: '#7ea1bf',
            boxShadow: 'inset 2px -10px 0px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      {/* Cover ring (to hide back of ring) */}
      <div 
        className="absolute w-full h-1/2 z-20"
        style={{
          backgroundColor: '#546c8c',
          borderBottomLeftRadius: '80%',
          borderBottomRightRadius: '80%',
          borderTopLeftRadius: '100px',
          borderTopRightRadius: '100px',
          transform: 'translate(0px, -17px)',
          boxShadow: 'inset 0px -2px 0px rgba(0, 0, 0, 0.1)'
        }}
      />

      {/* Planet spots */}
      <div className="absolute w-full h-full flex items-center justify-center z-20">
        {/* Spot 1 */}
        <span 
          className="absolute w-[30px] h-[30px] rounded-full"
          style={{
            backgroundColor: '#3c4359',
            top: '20px',
            right: '50px',
            boxShadow: 'inset -2px 3px 0px rgba(0, 0, 0, 0.3)',
            animation: 'dots 5s ease-in-out infinite alternate'
          }}
        />
        {/* Spot 2 */}
        <span 
          className="absolute w-[15px] h-[15px] rounded-full"
          style={{
            backgroundColor: '#3c4359',
            top: '40px',
            left: '50px',
            boxShadow: 'inset -2px 3px 0px rgba(0, 0, 0, 0.3)',
            animation: 'dots 5s ease-in-out infinite alternate'
          }}
        />
        {/* Spot 3 */}
        <span 
          className="absolute w-[25px] h-[25px] rounded-full"
          style={{
            backgroundColor: '#3c4359',
            top: '80px',
            left: '20px',
            boxShadow: 'inset -2px 3px 0px rgba(0, 0, 0, 0.3)',
            animation: 'dots 5s ease-in-out infinite alternate'
          }}
        />
        {/* Spot 4 */}
        <span 
          className="absolute w-[40px] h-[40px] rounded-full"
          style={{
            backgroundColor: '#3c4359',
            top: '80px',
            left: '90px',
            boxShadow: 'inset -2px 3px 0px rgba(0, 0, 0, 0.3)',
            animation: 'dots 5s ease-in-out infinite alternate'
          }}
        />
        {/* Spot 5 */}
        <span 
          className="absolute w-[15px] h-[15px] rounded-full"
          style={{
            backgroundColor: '#3c4359',
            top: '160px',
            left: '70px',
            boxShadow: 'inset -2px 3px 0px rgba(0, 0, 0, 0.3)',
            animation: 'dots 5s ease-in-out infinite alternate'
          }}
        />
        {/* Spot 6 */}
        <span 
          className="absolute w-[10px] h-[10px] rounded-full"
          style={{
            backgroundColor: '#3c4359',
            top: '165px',
            left: '125px',
            boxShadow: 'inset -2px 3px 0px rgba(0, 0, 0, 0.3)',
            animation: 'dots 5s ease-in-out infinite alternate'
          }}
        />
        {/* Spot 7 */}
        <span 
          className="absolute w-[15px] h-[15px] rounded-full"
          style={{
            backgroundColor: '#3c4359',
            top: '90px',
            left: '150px',
            boxShadow: 'inset -2px 3px 0px rgba(0, 0, 0, 0.3)',
            animation: 'dots 5s ease-in-out infinite alternate'
          }}
        />
      </div>
    </div>

    {/* Loading text */}
    <p 
      className="absolute bottom-[-20px] z-20 text-sm w-[100px] text-center font-mono"
      style={{ 
        color: '#bacbd9',
        animation: 'text 4s ease-in-out infinite'
      }}
    >
      Investronaut
    </p>
  </div>

  <style>{`
    @keyframes planet {
      0% {
        transform: rotate(10deg);
      }
      100% {
        transform: rotate(-10deg);
      }
    }

    @keyframes ring {
      0% {
        transform: rotateX(110deg) rotateZ(0deg) translate(-50px, 5px);
      }
      100% {
        transform: rotateX(110deg) rotateZ(360deg) translate(-50px, 5px);
      }
    }

    @keyframes dots {
      0% {
        box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.3);
      }
      100% {
        box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.3);
      }
    }

    @keyframes text {
      0% {
        transform: translateX(-30px);
        letter-spacing: 0px;
        color: #bacbd9;
      }
      25% {
        letter-spacing: 3px;
        color: #7ea1bf;
      }
      50% {
        transform: translateX(30px);
        letter-spacing: 0px;
        color: #bacbd9;
      }
      75% {
        letter-spacing: 3px;
        color: #7ea1bf;
      }
      100% {
        transform: translateX(-30px);
        letter-spacing: 0px;
        color: #bacbd9;
      }
    }
  `}</style>
</div>
          {/* Grid */}
          <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-linear-to-b *:before:from-transparent *:before:via-gray-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] md:*:px-10 md:*:py-12">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="m15.447 6.605-.673-.336a6.973 6.973 0 0 0-.761-1.834l.238-.715a.999.999 0 0 0-.242-1.023l-.707-.707a.995.995 0 0 0-1.023-.242l-.715.238a6.96 6.96 0 0 0-1.834-.761L9.394.552A1 1 0 0 0 8.5-.001h-1c-.379 0-.725.214-.895.553l-.336.673a6.973 6.973 0 0 0-1.834.761l-.715-.238a.997.997 0 0 0-1.023.242l-.707.707a1.001 1.001 0 0 0-.242 1.023l.238.715a6.959 6.959 0 0 0-.761 1.834l-.673.336a1 1 0 0 0-.553.895v1c0 .379.214.725.553.895l.673.336c.167.653.425 1.268.761 1.834l-.238.715a.999.999 0 0 0 .242 1.023l.707.707a.997.997 0 0 0 1.023.242l.715-.238a6.959 6.959 0 0 0 1.834.761l.336.673a1 1 0 0 0 .895.553h1c.379 0 .725-.214.895-.553l.336-.673a6.973 6.973 0 0 0 1.834-.761l.715.238a1.001 1.001 0 0 0 1.023-.242l.707-.707c.268-.268.361-.664.242-1.023l-.238-.715a6.959 6.959 0 0 0 .761-1.834l.673-.336A1 1 0 0 0 16 8.5v-1c0-.379-.214-.725-.553-.895ZM8 13a5 5 0 1 1 .001-10.001 5 5 0 0 1 0 10.001Z" />
                </svg>
              <span>
    <span className="text-3xl font-semibold text-black">10,000+</span><br />
    Venture Capitalists
  </span>
              </h3>
              <p className="text-[15px] text-gray-700">
                Tap into a thriving global network of 10,000+ venture capitalists actively seeking the next big opportunity across diverse sectors.
              </p>
            </article>
            <article>
             <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={12}
                >
                  <path d="M2 0a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H3Z" />
                </svg>
               <span>
    <span className="text-3xl font-semibold text-black">$20B+</span><br />
    In Available Funds
  </span>
              </h3>
              <p className="text-[15px] text-gray-700">
                Access over $20 billion in collective investable capital from world-class investors ready to fund innovative startups like yours.
              </p>
            </article>
            <article>
             <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.75 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM2.5 14.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM1.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                </svg>
                <span>
    <span className="text-3xl font-semibold text-black">150+</span><br />
    Countries Represented
  </span>
              </h3>
              <p className="text-[15px] text-gray-700">
               Connect with a borderless community of founders and investors across 150+ countries, enabling global reach from day one.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}